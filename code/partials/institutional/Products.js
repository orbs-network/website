import React from "react";
import MainGrid from "../shared/MainGrid";

function ProductIcon({ kind }) {
  // Compact placeholder icons drawn with CSS shapes — swap for real
  // brand marks when assets land.
  return (
    <span
      className={"institutional-products-icon institutional-products-icon-" + (kind || "triangles")}
      aria-hidden="true"
    />
  );
}

function ProductCard({ cat, name, icon, desc, url }) {
  return (
    <a className="institutional-products-card" href={url || "#"}>
      <div className="institutional-products-cat">{cat}</div>
      <div className="institutional-products-name-row">
        <ProductIcon kind={icon} />
        <span className="institutional-products-name">{name}</span>
      </div>
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
  p1cat, p1name, p1icon, p1desc, p1url,
  p2cat, p2name, p2icon, p2desc, p2url,
  p3cat, p3name, p3icon, p3desc, p3url,
  p4cat, p4name, p4icon, p4desc, p4url,
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
            <ProductCard cat={p1cat} name={p1name} icon={p1icon} desc={p1desc} url={p1url} />
            <ProductCard cat={p2cat} name={p2name} icon={p2icon} desc={p2desc} url={p2url} />
            <ProductCard cat={p3cat} name={p3name} icon={p3icon} desc={p3desc} url={p3url} />
            <ProductCard cat={p4cat} name={p4name} icon={p4icon} desc={p4desc} url={p4url} />
          </div>
        </div>
      </MainGrid>
    </section>
  );
}

export default Products;
