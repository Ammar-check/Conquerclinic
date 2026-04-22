import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StarRating from "@/components/resuabale/StarRating";
// import productShowcaseData from "@/data/glp-1/productShowcaseData.json";

const ProductShowCase = ({ data }) => {
  const { product, card } = data;

  return (
    <section className="product-showcase-section">
      {/* Radial dark vignette — decorative */}
      <div className="product-showcase__vignette" aria-hidden="true" />

      <Container fluid className="product-showcase__container">
        <Row className="align-items-center g-0">
          {/* ── Left: product image ── */}
          <Col xs={12} lg={6} className="product-showcase__image-col">
            <img
              src={product.image}
              alt={product.imageAlt}
              className="product-showcase__image"
            />
          </Col>

          {/* ── Right: product card ── */}
          <Col xs={12} lg={6} className="product-showcase__card-col">
            <div className="product-card">
              {/* Row 1: reviews + HSA/FSA */}
              <div className="product-card__meta-row">
                <StarRating
                  rating={card.reviews.rating}
                  count={card.reviews.count}
                />
                <span className="product-card__hsa">{card.hsaFsa}</span>
              </div>

              {/* Row 2: category + requirement badge */}
              <div className="product-card__tags-row">
                <span className="product-card__category">{card.category}</span>
                <span className="product-card__req-badge">
                  {card.requirementBadge}
                </span>
              </div>

              {/* Product title */}
              <h2 className="product-card__title">{card.title}</h2>

              {/* Description */}
              <p className="product-card__description">{card.description}</p>
              <p className="product-card__description">{card.description2}</p>

              {/* CTAs */}
              <div className="product-card__ctas">
                <a
                  href={card.primaryCta.href}
                  className="product-card__cta product-card__cta--primary"
                >
                  {card.primaryCta.label}
                </a>
                <a
                  href={card.secondaryCta.href}
                  className="product-card__cta product-card__cta--secondary"
                >
                  {card.secondaryCta.label}
                </a>

              </div>

              {/* Safety link */}
              <a
                href={card.safetyLink.href}
                className="product-card__safety-link"
              >
                {card.safetyLink.label}
              </a>

              {/* Fine print */}
              <p className="product-card__fine-print">
                {card.finePrint}{" "}
                <a href="#fine-print" className="product-card__fine-print-link">
                  {card.finePrintLink}
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductShowCase;
