import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "@/components/pages/product/ProductCard";
import data from "@/data/glp-1/youMightLike.json";

/**
 * YouMightLike
 * ------------
 * Renders a heading + 3-column product card grid.
 * Reuses the existing <ProductCard /> component — no new card UI created here.
 */
const YouMightLike = () => {
    const { heading, products } = data;

    return (
        <section className="you-might-like-section" aria-labelledby="you-might-like-heading">
            <Container>
                {/* ── Heading ── */}
                <Row>
                    <Col xs={12}>
                        <h2 id="you-might-like-heading" className="you-might-like-heading">
                            {heading}
                        </h2>
                    </Col>
                </Row>

                {/* ── Product cards ── */}
                <Row className="you-might-like-grid">
                    {products.map((product) => (
                        <Col key={product.id} xs={12} md={6} lg={4}>
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default YouMightLike;