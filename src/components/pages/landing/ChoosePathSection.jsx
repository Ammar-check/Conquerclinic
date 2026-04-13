import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PathCard from "@/components/resuabale/PathCard";
import choosePathData from "@/data/choosePathData.json";

/**
 * ChoosePathSection
 * ─────────────────────────────────────────────
 * Section 2: Two-column split cards (Men / Women).
 * PathCard is a reusable sub-component looped from
 * choosePathData.json.
 *
 * Data source: src/data/choosePathData.json
 */
const ChoosePathSection = () => {
  const { sectionTitle, paths } = choosePathData;

  return (
    <section className="choose-path-section">
      <Container>
        {/* Section heading */}
        <Row className="justify-content-center mb-4">
          <Col xs={12} className="text-center">
            <h2 className="choose-path__title">{sectionTitle}</h2>
          </Col>
        </Row>

        {/* Cards grid */}
        <Row className="choose-path__grid g-0">
          {paths.map((path, index) => (
            <Col key={path.id} xs={12} md={6}>
              <PathCard path={path} isLast={index === paths.length - 1} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ChoosePathSection;