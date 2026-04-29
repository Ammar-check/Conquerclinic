import LongevityCard from '@/components/ui/LongvityCard'
import React from 'react'

const RightTest = ({data}) => {
    const {rightTest} = data;
  return (
    <div>
         <h1>{rightTest.title}</h1>
         <p>{rightTest.subTitle}</p>
         <div className='grid grid-cols-2'>

          {rightTest.longevityCards.map((card) => (
  <LongevityCard key={card.id} data={card} />
))}
         </div>
    </div>
  )
}

export default RightTest