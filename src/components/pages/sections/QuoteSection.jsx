"use client";

import TestosteroneCard from "@/components/ui/TestosteroneCard";
import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const QuoteSection = ({ data, testoCard }) => {
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
          <Col lg={12}>
            <div className="quote-section__inner" style={bgStyle}>
               
               <TestosteroneCard data={testoCard}/>

              {quote && (
                <p className="quote-section__text">
                “{quote}”
              </p>
              )}

              {author && (
                <p className="quote-section__author">
                — {author}
              </p>
              )}

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default QuoteSection;