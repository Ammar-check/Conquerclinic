import { Container, Row, Col } from 'react-bootstrap';
import IncludedItem from '@/components/resuabale/IncludedItem';
import data from '@/data/glp-1/transparentPricing.json';

const TransparentPricing = () => {
    return (
        <section className="transparent-pricing-section">
            <Container className="px-0">
                <Row className="g-0 align-items-stretch">

                    {/* LEFT: Text content */}
                    <Col xs={12} lg={6} className="transparent-pricing-content d-flex align-items-center">
                        <div className="transparent-pricing-inner">

                            {/* Heading */}
                            <h2 className="transparent-pricing-heading">{data.heading}</h2>

                            {/* Description */}
                            <p className="transparent-pricing-description">{data.description}</p>

                            {/* Included label */}
                            <p className="transparent-pricing-included__label">{data.includedLabel}</p>

                            {/* Included items list — loops IncludedItem */}
                            <ul className="transparent-pricing-included__list list-unstyled">
                                {data.includedItems.map((item, index) => (
                                    <IncludedItem key={index} text={item} />
                                ))}
                            </ul>

                            {/* CTA button */}
                            <a href={data.cta.href} className="transparent-pricing-cta">
                                {data.cta.label}
                            </a>

                        </div>
                    </Col>

                    {/* RIGHT: Image */}
                    <Col xs={12} lg={6} className="transparent-pricing-image-col">
                        <div className="transparent-pricing-image-wrapper">
                            <img
                                src={data.image.src}
                                alt={data.image.alt}
                                className="transparent-pricing-image"
                            />
                            {/* Dark overlay matching Figma rgba(0,0,0,0.20) */}
                            <div className="transparent-pricing-image-overlay" aria-hidden="true" />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default TransparentPricing;