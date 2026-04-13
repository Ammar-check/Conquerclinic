import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TierCard from "@/components/resuabale/TierCard";
import tiersData from "@/data/tiersData.json";

/**
 * ChooseLevelSection
 * ─────────────────────────────────────────────
 * Section 4: Three-tier pricing / level cards.
 * The featured (Tier 02) card is elevated and
 * gold-bordered via the `featured` flag in JSON.
 * TierCard is a reusable sub-component looped
 * from tiersData.json.
 *
 * Data source: src/data/tiersData.json
 */
const ChooseLevelSection = () => {
    const { sectionTitle, subtitle, tiers } = tiersData;

    return (
        <section className="choose-level-section">
            <Container>
                {/* Heading */}
                <Row className="justify-content-center">
                    <Col xs={12} className="text-center">
                        <h2 className="choose-level__title">{sectionTitle}</h2>
                        <p className="choose-level__subtitle">{subtitle}</p>
                    </Col>
                </Row>

                {/* Tier cards — align-items-stretch so all cards fill the row height */}
                <Row className="choose-level__grid g-4 align-items-center justify-content-center">
                    {tiers.map((tier) => (
                        <Col key={tier.id} xs={12} md={6} lg={4}>
                            <TierCard tier={tier} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default ChooseLevelSection;