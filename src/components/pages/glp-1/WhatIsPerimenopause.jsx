import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SymptomCard from "@/components/resuabale/SymptomCard";
import data from "@/data/glp-1/whatIsPerimenopause.json";

/**
 * WhatIsPerimenopause
 * -------------------
 * Section component — corresponds to the "What is Perimenopause?" block in Figma.
 * All text is sourced from `data/whatIsPerimenopause.json`.
 * Symptom cards are rendered via the reusable <SymptomCard /> component.
 */
const WhatIsPerimenopause = () => {
    const { heading, description, symptomCards } = data;

    return (
        <section className="perimenopause-section" aria-labelledby="perimenopause-heading">
            <Container>
                {/* ── Header copy ── */}
                <Row className="justify-content-center text-center mb-2">
                    <Col xs={12} md={10} lg={8}>
                        <h2 id="perimenopause-heading" className="perimenopause-heading">
                            {heading}
                        </h2>
                    </Col>
                </Row>

                <Row className="justify-content-center text-center">
                    <Col xs={12} md={10} lg={8}>
                        <p className="perimenopause-description">{description}</p>
                    </Col>
                </Row>

                {/* ── Symptom cards grid ── */}
                <Row className="symptom-cards-grid justify-content-center">
                    {symptomCards.map((card) => (
                        <Col key={card.id} xs={12} md={6} className="mb-0">
                            <SymptomCard
                                id={card.id}
                                label={card.label}
                                iconAlt={card.iconAlt}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default WhatIsPerimenopause;