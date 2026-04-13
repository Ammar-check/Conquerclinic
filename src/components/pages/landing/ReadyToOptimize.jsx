// src/components/sections/ReadyToOptimize/ReadyToOptimize.jsx

import { Container } from "react-bootstrap";
import data from "@/data/readyToOptimize.json";

const ReadyToOptimize = () => {
    return (
        <section className="rto-section">
            <Container>
                <div className="rto-inner text-center">

                    {/* Badge */}
                    <div className="rto-badge d-inline-flex align-items-center gap-2 mb-4">
                        {data.badge.dot && <span className="rto-dot" aria-hidden="true" />}
                        <span className="rto-badge-label">{data.badge.label}</span>
                    </div>

                    {/* Heading */}
                    <h2 className="rto-heading">{data.heading}</h2>

                    {/* Subheading */}
                    <p className="rto-subheading">{data.subheading}</p>

                    {/* CTA */}
                    <a href={data.cta.href} className="rto-cta">
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
            </Container>
        </section>
    );
};

export default ReadyToOptimize;