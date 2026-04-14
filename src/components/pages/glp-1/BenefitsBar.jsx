import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import benefitsBarData from "@/data/glp-1/benefitsBarData.json";

/**
 * BenefitItem — inline reusable sub-component.
 * Kept in this file since it's only used here and
 * has no independent reuse case.
 */
const BenefitItem = ({ title, description }) => (
    <div className="benefit-item">
        <h3 className="benefit-item__title">{title}</h3>
        <p className="benefit-item__description">{description}</p>
    </div>
);

/**
 * BenefitsBar
 * ─────────────────────────────────────────────
 * Section 6: Horizontal three-column benefits
 * strip. BenefitItem is looped from JSON.
 * Dividers are rendered between items via CSS.
 *
 * Data source: src/data/benefitsBarData.json
 */
const BenefitsBar = () => {
    const { benefits } = benefitsBarData;

    return (
        <section className="benefits-bar" aria-label="Key benefits">
            <Container>
                <Row className="justify-content-center align-items-center">
                    {benefits.map((benefit, index) => (
                        <Col key={benefit.id} xs={12} md={4}
                             className={`benefits-bar__col${index < benefits.length - 1 ? " benefits-bar__col--divided" : ""}`}
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