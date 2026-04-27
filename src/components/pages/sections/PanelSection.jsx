import React from 'react'
import styles from './PanelSection.module.css'
import PanelCard from '@/components/ui/PanelCard';

const PanelSection = ({data}) => {
   const {heading,description, panelCard,bottomSection} = data.panelSection;

  return (
    <div className={styles.panelSec}>
         <h1 className={styles.heading}>{heading}</h1>
         <p className={styles.desc}>{description}</p>
         <div className={styles.cardSec}> 
         {panelCard.map((card)=>(
           <PanelCard data={card} />
          ))}
          </div>
          
          <div className={styles.bottomSec}>
          <h1 className={styles.bottomHeading}>{bottomSection.heading}</h1>
           {bottomSection.text.map((txt)=>(
                <p className={styles.txt}>{txt}</p>
           ))}
          </div>
    </div>
  )
}

export default PanelSection