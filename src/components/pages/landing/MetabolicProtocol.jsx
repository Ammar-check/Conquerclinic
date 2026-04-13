// src/components/sections/MetabolicProtocol/MetabolicProtocol.jsx

import { Container, Row, Col, Button } from "react-bootstrap";
import FeatureItem from "@/components/resuabale/FeatureItem";
import data from "@/data/metabolicProtocol.json";

const MetabolicProtocol = () => {
    return (
        <section className="metabolic-section">
            <Container fluid className="px-0">
                <Row className="g-0 align-items-stretch">

                    {/* ── LEFT: Text content ── */}
                    <Col xs={12} lg={6} className="metabolic-content d-flex align-items-center">
                        <div className="metabolic-inner">

                            {/* Badge */}
                            <p className="metabolic-badge">{data.badge}</p>

                            {/* Heading */}
                            <h2 className="metabolic-heading">{data.heading}</h2>

                            {/* Description */}
                            <p className="metabolic-description">{data.description}</p>

                            {/* Feature list – loops FeatureItem */}
                            <div className="metabolic-features">
                                {data.features.map((feature, index) => (
                                    <FeatureItem key={index} text={feature} />
                                ))}
                            </div>

                            {/* CTA */}
                            <a href={data.cta.href} className="metabolic-cta">
                                {data.cta.label}
                                <svg
                                    className="cta-arrow"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M3 8H13M13 8L8 3M13 8L8 13"
                                        stroke="black"
                                        strokeWidth="1.33"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>

                        </div>
                    </Col>

                    {/* ── RIGHT: Image panel ── */}
                    <Col xs={12} lg={6} className="metabolic-image-col">
                        <div className="metabolic-image-wrapper">
                            <img
                                src={data.image.src}
                                alt={data.image.alt}
                                className="metabolic-image"
                            />
                            {/* Gradient overlay matching Figma */}
                            <div className="metabolic-image-overlay" aria-hidden="true" />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default MetabolicProtocol;