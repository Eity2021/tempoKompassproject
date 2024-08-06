
import Faq from '../../components/faq/Faq'
import React from 'react'

export default function FQA() {
  return (
    <div>
     <div className="py-[48px]">
    <div className="container">
      <div>
        <h1  className="md:text-[36px] text-[28px] text-[#076F74] font-bold text-center "
          style={{ fontFamily: "Noe Display" }}>
          <span className="text-[#1E1E1E]">Frequently Asked</span> Question
        </h1>
       
      </div>
      <div className="pt-[40px] px-[30px]">
        <Faq></Faq>
      </div>
    </div>
    </div> </div>
  )
}
