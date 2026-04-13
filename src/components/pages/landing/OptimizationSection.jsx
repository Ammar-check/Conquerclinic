import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import OptimizationCard from "@/components/resuabale/OptimizationCard";
import optimizationData from "@/data/optimizationData.json";

/**
 * OptimizationSection
 * ─────────────────────────────────────────────
 * Section 3: Three-column optimization cards.
 * OptimizationCard is a reusable sub-component
 * looped from optimizationData.json.
 *
 * Data source: src/data/optimizationData.json
 */
const OptimizationSection = () => {
    const { sectionTitle, subtitle, cards } = optimizationData;

    return (
        <section className="optimization-section">
            <Container>
                {/* Heading */}
                <Row className="justify-content-center">
                    <Col xs={12} className="text-center">
                        <h2 className="optimization__title">{sectionTitle}</h2>
                        <p className="optimization__subtitle">{subtitle}</p>
                    </Col>
                </Row>

                {/* Cards */}
                <Row className="optimization__grid g-4">
                    {cards.map((card) => (
                        <Col key={card.id} xs={12} md={6} lg={4}>
                            <OptimizationCard card={card} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default OptimizationSection;