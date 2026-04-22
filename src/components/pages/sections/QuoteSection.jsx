"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const QuoteSection = ({ data }) => {
  const { quote, author } = data;

  return (
    <section className="quote-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="quote-section__inner">
              
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