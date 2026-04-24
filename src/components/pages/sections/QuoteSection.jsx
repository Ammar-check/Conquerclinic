"use client";

import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const QuoteSection = ({ data }) => {
  const { quote, author ,image } = data;

    // ✅ Dynamic background logic
  const bgStyle = image
  ? {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }
  : {};

  return (
    <section className="quote-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="quote-section__inner" style={bgStyle}>
              

              <p className="quote-section__text">
                “{quote}”
              </p>

              <p className="quote-section__author">
                — {author}
              </p>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default QuoteSection;