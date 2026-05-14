import React from "react";
import MainGrid from "../shared/MainGrid";

// Map product name (as authored in content/.../products/index.md) to
// the committed full-logo SVG path. The logo SVG includes both the
// brand mark and the wordmark — it replaces the separate icon + name
// elements from the previous design.
const PRODUCT_LOGO = {
  "Liquidity Hub": "/assets/img/institutional/product-liquidity-hub.svg",
  dTWAP: "/assets/img/institutional/product-dtwap.svg",
  dLIMIT: "/assets/img/institutional/product-dlimit.svg",
  dSLTP: "/assets/img/institutional/product-dsltp.svg",
};

function ProductCard({ cat, name, desc, url }) {
  const logoSrc = PRODUCT_LOGO[name];
  return (
    <a className="institutional-products-card" href={url || "#"}>
      <div className="institutional-products-cat">{cat}</div>
      {logoSrc ? (
        <img
          className="institutional-products-logo"
          src={logoSrc}
          alt={name}
        />
      ) : (
        <div className="institutional-products-name institutional-products-name-fallback">
          {name}
        </div>
      )}
      <p className="institutional-products-desc">{desc}</p>
      <div className="institutional-products-cta">
        <span>DISCOVER</span>
        <span className="institutional-btn-arrow" aria-hidden="true">→</span>
      </div>
    </a>
  );
}

function Products({
  eyebrow, headline1, headline2, headlineGrad, body,
  p1cat, p1name, p1desc, p1url,
  p2cat, p2name, p2desc, p2url,
  p3cat, p3name, p3desc, p3url,
  p4cat, p4name, p4desc, p4url,
}) {
  return (
    <section className="institutional-sec institutional-sec-dark institutional-products">
      <MainGrid>
        <div className="institutional-products-grid">
          <div className="institutional-products-intro">
            <div className="institutional-eyebrow institutional-eyebrow-light">
              {eyebrow}
            </div>
            <h2 className="institutional-h2">
              <span>{headline1}</span><br />
              <span>{headline2}</span><br />
              <span className="institutional-grad-cyan">{headlineGrad}</span>
            </h2>
            <p className="institutional-body institutional-body-light">{body}</p>
          </div>
          <div className="institutional-products-cards">
            <ProductCard cat={p1cat} name={p1name} desc={p1desc} url={p1url} />
            <ProductCard cat={p2cat} name={p2name} desc={p2desc} url={p2url} />
            <ProductCard cat={p3cat} name={p3name} desc={p3desc} url={p3url} />
            <ProductCard cat={p4cat} name={p4name} desc={p4desc} url={p4url} />
          </div>
        </div>
      </MainGrid>
    </section>
  );
}

export default Products;
