import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

/**
 * MenopauseStats
 * --------------
 * Displays a bold stat (80%) with a supporting description paragraph above
 * and a short label beneath the figure.
 *
 * Layout is fully centred on all breakpoints — no reusable sub-component
 * needed here as there is only one stat figure in this section.
 */
const MenopauseStats = ({menopauseStatData}) => {
    const { description, stat } = menopauseStatData;

    return (
        <section className="menopause-stats-section" aria-label="Menopause statistics">
            <Container>
                {/* ── Description copy ── */}
                <Row className="justify-content-center text-center">
                    <Col xs={12} md={11} lg={10}>
                        <p className="menopause-stats-description">{description}</p>
                    </Col>
                </Row>

                {/* ── Stat figure ── */}
                <Row className="justify-content-center text-center">
                    <Col xs="auto">
                        <div className="menopause-stat-block">
                            <div className="menopause-stat-figure" aria-label={`${stat.number}${stat.suffix}`}>
                                <span className="menopause-stat-number">{stat.number}</span>
                                <span className="menopause-stat-suffix" aria-hidden="true">{stat.suffix}</span>
                            </div>
                            <p className="menopause-stat-label">{stat.label}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default MenopauseStats;