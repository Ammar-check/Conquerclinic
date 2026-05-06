import React from 'react'
import aboutData from "@/data/about/about.json"
import Image from 'next/image';
import styles from "@/pages/about/About.module.css"
import {  ArrowDown } from 'react-bootstrap-icons';
import StoryBlock from '@/components/ui/StoryBlock';
import YouMightLike from '@/components/pages/glp-1/YouMightLike';

const About = () => {
    const {hero} = aboutData;


  return (
    <div>
        <div className={styles.hero}>
            <h1 className={styles.heading}><span>{hero.paragraph.span}</span>{hero.paragraph.para}</h1>
            <div className='text-white flex flex-col items-center'>{hero.arrow} <ArrowDown/></div>
            <div className={styles.imageWrapper}>
                <Image src={hero.image} alt='hero Image' fill  />
                <span className={styles.tag}>{hero.tag}</span>
            </div>
            <div className='h-[1px] bg-[#BBBBBB] w-full'></div>
        </div>

        <StoryBlock data={aboutData.story} />
        <YouMightLike youMightLikeData={aboutData.mightLike} />
        <StoryBlock data={aboutData.approach} />
        <StoryBlock data={aboutData.conquer} />
        
    </div>
  )
}

export default About