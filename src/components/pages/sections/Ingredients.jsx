import SymptomCard from '@/components/resuabale/SymptomCard';
import Image from 'next/image';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


/**
 * WhatIsPerimenopause
 * -------------------
 * Section component — corresponds to the "What is Perimenopause?" block in Figma.
 * All text is sourced from `data/whatIsPerimenopause.json`.
 * Symptom cards are rendered via the reusable <SymptomCard /> component.
 */
const Ingredients = ({data}) => {
    const { ingredients } = data;
    // const { heading, description, symptomCards } = ingredients;

const ingredientsArray = Array.isArray(ingredients)
  ? ingredients
  : [ingredients];

    return (
      <>
        {ingredientsArray.map((item,index)=>(
           <section  key={index} className="perimenopause-section" aria-labelledby="perimenopause-heading">
            <Container>
                {/* ── Header copy ── */}
                <Row className="justify-content-center text-center mb-2 items-center">
                    <Col xs={12} md={10} lg={8}>
                       {item.image && ( <div className='bg-[#D9D9D9] w-fit m-auto p-6 rounded-full mb-3'>
                        <Image src={item.image} width={84} height={84} alt='panel image' style={{margin:"auto"}} />
                       </div> )}
                        <h2 id="perimenopause-heading" className="perimenopause-heading">
                            {item.heading}
                        </h2>
                        {item.subHeading && ( <p className='text-white text-sm'>{item.subHeading}</p> )}

                        {item.btn && ( <button className='bg-[#C9A55A] py-2 px-5  text-white' style={{borderRadius:'30px'}}>{item.btn}</button> )}
                    </Col>
                </Row>

                <Row className="justify-content-center text-center">
                    <Col xs={12} md={10} lg={8}>
                        <p className="perimenopause-description">{item.description}</p>
                    </Col>
                </Row>

                {/* ── Symptom cards grid ── */}
                <Row className="symptom-cards-grid justify-content-left">
                    {item.symptomCards.map((card) => (
                        <Col key={card.id} xs={12} md={6} className="mb-0">
                            <SymptomCard
                                icon={card.icon}
                                label={card.label}
                                iconAlt={card.iconAlt}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section> 
        ))}
        </>
    );
};

export default Ingredients;