import React from 'react'
import styles from "./PanelCard.module.css"
import Image from 'next/image';

const PanelCard = ({data}) => {

    // const {panelCard} = data;
    const {heading,icon,image,tag,features,btns,mainHeading} = data;

  return (
    <div className={styles.panelCardCont}>
           <div className='flex gap-2 items-center' >
            <span><Image src={icon} width={14} height={14} alt="time icon alt"/></span>
            <span className={styles.heading}>{heading}</span>
            </div>
           <Image src={image} className={styles.panelImg} width={160} height={160} alt='product image' />
           <span className={styles.panelTag}>{tag}</span>
           <h1 className={styles.mainHeading}>{mainHeading}</h1>

           {features.map((feature,index)=>(
           <div className={styles.featureSec}>
            <li key={index} className={styles.feature}>{feature}</li>
           </div>
           ))}
         
         <div className='absolute bottom-[50px] left-[40px] w-[80%]'>
           {btns.map((btn)=>(
               <button key={btn.id} className={styles.btn}
               style={{
      backgroundColor: btn.variant,
      color: btn.textVariant,
      border: btn.variant === "#ffff" ? "1px solid #363636" : "none"
    }}
    >{btn.content}</button>
           ))}
           </div>
    </div>
  )
}

export default PanelCard