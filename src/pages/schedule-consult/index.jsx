import DynamicForm from '@/components/layout/DynamicForm'
import React from 'react'
import scheduleConsultData from "@/data/schedule-consult/schedule-consult.json"
import Navbar from '@/components/layout/Navbar'

const Consult = () => {
  return (
    <>
         <Navbar/>
    <div className='bg-[#333333] py-18'>
         <DynamicForm data={scheduleConsultData} />
    </div>
    </>
  )
}

export default Consult