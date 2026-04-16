import { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AUTOPLAY_DELAY = 5000;

const Testimonial = ({testimonialData}) => {
    const { testimonials } = testimonialData;
    const [activeIndex, setActiveIndex] = useState(0);
    const [fading, setFading] = useState(false);

    const goTo = useCallback((index) => {
        setFading(true);
        setTimeout(() => {
            setActiveIndex(index);
            setFading(false);
        }, 350); // fade-out duration
    }, []);

    // Auto-advance every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            goTo((activeIndex + 1) % testimonials.length);
        }, AUTOPLAY_DELAY);
        return () => clearInterval(timer);
    }, [activeIndex, goTo, testimonials.length]);

    const current = testimonials[activeIndex];

    return (
        <section className="testimonial-section">
            <Container>
                <div className="testimonial-card">
                    <Row className="justify-content-center">
                        <Col xs={12} md={10} lg={9}>

                            {/* Quote + author — fade on slide change */}
                            <div className={`testimonial-card__content ${fading ? 'is-fading' : ''}`}>
                                <blockquote className="testimonial-card__quote">
                                    &ldquo;{current.quote}&rdquo;
                                </blockquote>
                                <p className="testimonial-card__author">{current.author}</p>
                            </div>

                            {/* Dot indicators */}
                            <div className="testimonial-dots" role="tablist" aria-label="Testimonial slides">
                                {testimonials.map((t, i) => (
                                    <button
                                        key={t.id}
                                        className={`testimonial-dot ${i === activeIndex ? 'is-active' : ''}`}
                                        onClick={() => goTo(i)}
                                        role="tab"
                                        aria-selected={i === activeIndex}
                                        aria-label={`Slide ${i + 1}: ${t.author}`}
                                    />
                                ))}
                            </div>

                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Testimonial;