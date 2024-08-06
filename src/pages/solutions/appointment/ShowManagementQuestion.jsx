import React from 'react'
import './ShowManagementQuestion.css';
export default function ShowManagementQuestion({ faq, index, toggleFAQ }) {
  return (
    <div
    className={"mfaq " + (faq.open ? "open" : "")}
    key={index}
    onClick={() => toggleFAQ(index)}
  >
    <div className="mfaq-question">{faq.question}</div>
    <div className="mfaq-answer">{faq.answer}</div>
  </div>
  )
}
