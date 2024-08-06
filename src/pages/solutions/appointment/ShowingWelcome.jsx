import React from 'react'
import './ShowingWelcome.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function ShowingWelcome({ faq, index, toggleFAQ }) {
  return (
    <div
    className={"vfaq " + (faq.open ? "open" : "")}
    key={index}
    onClick={() => toggleFAQ(index)}
  > 
    <div className='flex'>
    <div className="pr-[15px] pt-[-4px]">
        <LazyLoadImage src={faq.image} alt="image"/>
    </div>
    <div className="vfaq-question">{faq.question}</div>
    </div>
    <div className="vfaq-answer">{faq.answer}</div>
  </div>
  )
}
