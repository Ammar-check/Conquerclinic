import { Container, Row, Col } from 'react-bootstrap';
import StatCircle from '@/components/resuabale/StatCircle';
import data from '@/data/glp-1/hrtStats.json';

const HRTStats = () => {
    return (
        <section className="hrt-stats-section">
            <Container>

                {/* Headline */}
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={8} className="text-center">
                        <p className="hrt-stats__headline">{data.headline}</p>
                    </Col>
                </Row>

                {/* Sub-headline */}
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={9} className="text-center">
                        <p className="hrt-stats__subheadline">{data.subheadline}</p>
                    </Col>
                </Row>

                {/* Stat circles — loop StatCircle */}
                <Row className="justify-content-center hrt-stats__circles-row g-4 g-lg-0">
                    {data.stats.map((stat) => (
                        <Col
                            key={stat.id}
                            xs={12}
                            sm={6}
                            lg={4}
                            className="d-flex justify-content-center"
                        >
                            <StatCircle
                                value={stat.value}
                                label={stat.label}
                                accentColor={stat.accentColor}
                            />
                        </Col>
                    ))}
                </Row>

            </Container>

            {/* Bottom divider line */}
            <div className="hrt-stats__divider" aria-hidden="true" />
        </section>
    );
};

export default HRTStats;