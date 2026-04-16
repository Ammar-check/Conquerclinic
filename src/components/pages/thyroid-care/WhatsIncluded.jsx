import { Container, Row, Col } from 'react-bootstrap';
import IncludedCard from './IncludedCard';

const WhatsIncluded = ({ whatsIncludedData, icons }) => {

    return (
        <section className="whats-included-section">
            <Container>

                {/* Section heading */}
                <Row className="justify-content-center">
                    <Col xs={12} className="text-center">
                        <h2 className="whats-included__heading">{whatsIncludedData.heading}</h2>
                    </Col>
                </Row>

                {/* 3-col × 2-row grid — loops IncludedCard */}
                <Row className="whats-included__grid g-4 g-lg-5">
                    {whatsIncludedData.items.map((item) => (
                        <Col key={item.id} xs={12} sm={6} lg={4}>
                            <IncludedCard
                                iconId={item.iconId}
                                title={item.title}
                                description={item.description}
                                icons={icons}
                            />
                        </Col>
                    ))}
                </Row>

            </Container>
        </section>
    );
};

export default WhatsIncluded;