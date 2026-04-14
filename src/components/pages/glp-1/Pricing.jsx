import { Container, Row, Col } from 'react-bootstrap';
import MedicationCard from "@/components/resuabale/MedicationCard";
import data from "@/data/glp-1/pricing.json";

const Pricing = () => {
    // Split medications into two rows of 2
    const row1 = data.medications.slice(0, 2);
    const row2 = data.medications.slice(2, 4);

    return (
        <section className="pricing-section">
            <Container fluid className="pricing-container">
                <Row className="g-0 align-items-start">

                    {/* ── LEFT: Heading + description (sticky on lg+) ── */}
                    <Col xs={12} lg={5} className="pricing-left">
                        <div className="pricing-left__inner">
                            <h2 className="pricing-heading">{data.heading}</h2>
                            <p className="pricing-description">{data.description}</p>
                        </div>
                    </Col>

                    {/* ── RIGHT: 2×2 medication card grid ── */}
                    <Col xs={12} lg={7} className="pricing-right">
                        {/* Row 1 */}
                        <div className="med-grid-row">
                            {row1.map((med) => (
                                <MedicationCard
                                    key={med.id}
                                    name={med.name}
                                    description={med.description}
                                    image={med.image}
                                    options={med.options}
                                />
                            ))}
                        </div>
                        {/* Row 2 */}
                        <div className="med-grid-row">
                            {row2.map((med) => (
                                <MedicationCard
                                    key={med.id}
                                    name={med.name}
                                    description={med.description}
                                    image={med.image}
                                    options={med.options}
                                />
                            ))}
                        </div>
                    </Col>

                </Row>

                {/* Bottom divider */}
                {data.divider && <div className="pricing-divider" aria-hidden="true" />}
            </Container>
        </section>
    );
};

export default Pricing;