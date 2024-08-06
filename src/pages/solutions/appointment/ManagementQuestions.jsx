import React, { useState } from 'react'
import ShowManagementQuestion from './ShowManagementQuestion';

export default function ManagementQuestions() {
    const [faqs, setFaqs] = useState([
        {
          question: "Registration",
          answer:
            "A visitor can easily sign in by providing his/her phone number.",
          open: false
        },
        {
          question: "Send Request",
          answer: "Easily send and receive meeting and event requests.",
          open: false
        },
      
        {
          question: "Check In",
          answer: "Upon arrival, Reception. They can use apps wants to collect, take a picture, and eSign documents",
          open: false
        },
        {
          question: "Notification",
          answer: "Send some Notification in your phone.",
          open: false
        },
        {
          question:
            "Check Out",
          answer: "Close your meetings",
          open: false
        },
       
    
      ]);

      const toggleFAQ = index => {
        setFaqs(
          faqs.map((faq, i) => {
            if (i == index) {
              faq.open = !faq.open;
            } else {
              faq.open = false;
            }
    
            return faq;
          })
        );
      };
    
  return (
    <div className="mfaqs">
    {faqs.map((faq, index) => (
      <ShowManagementQuestion faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
    ))}
  </div>

  )
}
