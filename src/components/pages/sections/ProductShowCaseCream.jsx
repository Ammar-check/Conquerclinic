import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StarRating from "@/components/resuabale/StarRating";
import Image from "next/image";
import { ArrowRight } from "react-bootstrap-icons";

const ProductShowCaseCream = ({ data }) => {
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
                <span className="product-card__trust">
                  <img
                    src={card.reviews.star}
                    alt="star"
                    className="product-card__star"
                  />
                  {card.reviews.trust}
                </span>
                <span className="product-card__hsa">{card.hsaFsa}</span>
              </div>

              {/* Row 2: category + requirement badge */}
              <div className="product-card__tags-row">
                <span className="product-card__category">{card.category}</span>
                {card.category2 && (<span className="product-card__category product-card__category-2">{card.category2}</span>)}
              </div>

              {/* Product title */}
              <h2 className="product-card__title">{card.title}</h2>

              {/* Description */}
              <p className="product-card__description">{card.description}</p>

                {data?.card?.desFeatures && (
                  <ul className="split-section__list">
                {card.desFeatures.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
                )}

              <p className="product-card__description">{card.description2}</p>

              {/* CTAs */}
              <div className="product-card__ctas">
                {/* ✅ Guard: don't render if no data */}
                {data?.card?.subscriptions?.length && (
                  <div className="cream-subscriptions">
                    {data.card.subscriptions.map((item) => (
                      <div
                        key={item.id}
                        className="cream-sub"
                        style={{ background: item.bgColor }}
                      >
                        <h1 className="cream-sub__title">
                          <span className={`circle ${item.circleColor}`}></span>

                          <span className="text">{item.title}</span>

                          <span className="price">{item.price}</span>
                        </h1>

                        <p className="cream-sub__desc">
                          <span>{item.description}</span>

                          {item.highlight && (
                            <span className="highlight">{item.highlight}</span>
                          )}
                        </p>
                      </div>
                    ))}

                  </div>
                )}



                {data?.card?.tested2?.length > 0 && (
  data.card.tested2.map((item) => (
    <div key={item.id} className="cream-sub tested-sub">
      
      <Image
        src={item.icon}
        width={32}
        height={24}
        alt="tested icon"
      />

      <div style={{ marginTop: "10px" }}>
        
        <h1 className="tested-sub__h1">
          {item.h1}
        </h1>

        <p className="tested-sub__p">
          {item.p}
        </p>

        <span className="tested-sub__type">{item.type}</span>

      </div>
    </div>
  ))
)}

                {/* ✅ Extra Price */}
    {data?.card?.extraPrice && (
      <p className="cream-sub__extra-price">
        {data.card.extraPrice}
      </p>
    )}

    {/* CTA Button (also safe) */}
                    {data?.card?.lab && (
                      <button className="cream-sub__btn" style={{background:"#fff",color:"#000",marginBottom:"-30px"}}>
                        {data.card.lab}
                      </button>
                    )}
                    {data?.card?.adToCart && (
                      <button className="cream-sub__btn">
                        {data.card.adToCart}
                      </button>
                    )}
                    {data?.card?.tested && (
                      <div className="cream-sub tested-sub">
                         <Image src={data.card.tested.icon} width={32} height={24} alt="tested icon" />
                         <div style={{marginTop:"10px"}}>
                            <h1 className="tested-sub__h1">{data.card.tested.h1} <span style={{background:"#DEE2EC",padding:"5px",borderRadius:'4px'}}>{data.card.tested.date}</span></h1>
                            <p className="tested-sub__p">{data.card.tested.p} <a href=""><ArrowRight color="#2B2B2B" size={18} /></a></p>
                         </div>
                      </div>
                    )}

              </div>

              {/* Safety link */}
              {card?.safetyLink && (
                 <a
                href={card.safetyLink.href}
                className="product-card__safety-link"
              >
                {card.safetyLink.label}
              </a>
              )

              }
              

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

export default ProductShowCaseCream;
