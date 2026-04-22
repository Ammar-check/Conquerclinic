import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const BenefitItem = ({ title, description }) => (
  <div className="benefit-item">
    <h3 className="benefit-item__title">{title}</h3>
    <p className="benefit-item__description">{description}</p>
  </div>
);

const BenefitsBar = ({ data }) => {
  const { benefits = [] } = data || {};

  return (
    <section className="benefits-bar" aria-label="Key benefits">
      <Container>
        <Row className="justify-content-center align-items-center">
          {benefits.map((benefit, index) => (
            <Col
              key={benefit.id}
              xs={12}
              md={4} 
              className={`benefits-bar__col ${
                index < benefits.length - 1
                  ? "benefits-bar__col--divided"
                  : ""
              }`}
            >
              <BenefitItem
                title={benefit.title}
                description={benefit.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BenefitsBar;