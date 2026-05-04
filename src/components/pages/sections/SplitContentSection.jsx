"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const SplitContentSection = ({ data }) => {
  const { splitContent } = data;
  const { title,subTitle, features, button, image,subTitle2, image2, rightSec } = splitContent;

  return (
    <section className="split-section">
      <Container>
        <Row className="align-items-center g-4">

          {data?.splitContent?.image2 && (
            <Col xs={12} lg={6}> 
            <div className="split-section__image-wrapper">
              <img
                src={image2.src}
                alt={image2.alt}
                className="split-section__image"
              />
            </div>
          </Col>
          )}

          {rightSec && (
            <Col xs={12} lg={6}>
            <div className="split-section__content2 ">
              <h2 className="split-section__title">{rightSec.title}</h2>
              <h3 className="split-section__subTitle">{rightSec.subTitle}</h3>

              <a href={rightSec.button.href} className="split-section__btn">
                {rightSec.button.label}
              </a>
            </div>
          </Col>
          )}

          {/* Left: Text */}
          {title && (
            <Col xs={12} lg={4}>
            <div className="split-section__content">
              <h2 className="split-section__title">{title}</h2>
              <h3 className="split-section__subTitle">{subTitle}</h3>

              {data?.splitContent?.features && (
                <ul className="split-section__list">
                {features.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              )}
                <h3 className="split-section__subTitle">{subTitle2}</h3>

              <a href={button.href} className="split-section__btn">
                {button.label}
              </a>
            </div>
          </Col>
          )}

          {/* Right: Image */}
          {data?.splitContent?.image && (
            <Col xs={12} lg={8}> 
            <div className="split-section__image-wrapper">
              <img
                src={image.src}
                alt={image.alt}
                className="split-section__image"
              />
            </div>
          </Col>
          )}

        </Row>
      </Container>
    </section>
  );
};

export default SplitContentSection;