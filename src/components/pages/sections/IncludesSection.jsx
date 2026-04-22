"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const IncludesSection = ({ data }) => {
  const { whatInclude } = data;
  const { title, items = [] } = whatInclude;

  return (
    <section className="includes-section">
      <Container>
        
        {/* Title */}
        <h2 className="includes-section__title">{title}</h2>

        {/* Grid */}
        <Row className="g-4">
          {items.map((item) => (
            <Col key={item.id} xs={12} sm={6} lg={4}>
              <div className="includes-card">

                {/* Icon */}
                <div className="includes-card__icon">
                  <Image
                    src={item.icon}
                    alt={item.heading}
                    width={24}
                    height={24}
                  />
                </div>

                {/* Text */}
                <h3 className="includes-card__heading">
                  {item.heading}
                </h3>

                <p className="includes-card__desc">
                  {item.description}
                </p>

              </div>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
};

export default IncludesSection;