const http = require("http");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Proxy to cuttlebelle dev server, redirect unknown paths to blog.orbs.com
const CUTTLEBELLE_PORT = 8080;
const PROXY_PORT = process.env.PORT || 8083;

const server = http.createServer((req, res) => {
  const options = {
    hostname: "localhost",
    port: CUTTLEBELLE_PORT,
    path: req.url,
    method: req.method,
    headers: req.headers,
  };

  const proxy = http.request(options, (proxyRes) => {
    if (proxyRes.statusCode === 404 || proxyRes.statusCode === 500) {
      const urlPath = req.url.replace(/^\/+|\/+$/g, "");
      if (urlPath && !urlPath.startsWith("assets/")) {
        res.writeHead(302, { Location: "https://blog.orbs.com/" + urlPath });
        res.end();
        return;
      }
    }
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res);
  });

  proxy.on("error", () => {
    res.writeHead(502);
    res.end("Cuttlebelle dev server not ready yet");
  });

  req.pipe(proxy);
});

server.listen(PROXY_PORT, () => {
  console.log(`Proxy server on http://localhost:${PROXY_PORT} → Cuttlebelle on :${CUTTLEBELLE_PORT}`);
  console.log(`Unknown paths redirect to blog.orbs.com`);
});
