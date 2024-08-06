import React from "react";
import { useState } from "react";
import  FrequentlyAskQues from './FrequentlyAskQues';
export default function Faq() {
  const [faqs, setFaqs] = useState([
    {
      question: "How can Kompass Connect, Payroll benefit my organization?",
      answer:
        "Kompass Connect/Kompass Lobby/Kompass Teams can automate and streamline various processes, such as HR management, visitor management, or payroll administration. This can save time and reduce manual errors.By automating tasks and workflows, these solutions can improve efficiency within your organization. This can free up valuable resources and allow your employees to focus on more strategic or value-added activities.These solutions typically provide centralized databases for managing employee information, visitor records, or payroll data. This enables easy access, retrieval, and reporting, leading to better data management and informed decision-making",
      open: false
    },
    {
      question: "Is Kompass Connect/Kompass Lobby/Kompass Teams customizable to meet our specific business needs?",
      answer: "Some solutions allow you to configure settings and parameters to align with your specific business requirements. This can include defining employee roles and permissions, configuring workflows, or adjusting payroll calculation rules.",
      open: false
    },
  
    {
      question: "How secure is the data handled by Kompass Connect,Kompass Teams?",
      answer: "The solution should employ strong encryption protocols to protect sensitive data during transmission and storage. This ensures that the data is securely transmitted over networks and is stored in an encrypted format.The data should be stored in secure environments, such as encrypted databases or cloud infrastructure with appropriate security measures. Regular backups should be performed to prevent data loss in case of unforeseen events.",
      open: false
    },
    {
      question: "Are there any training resources or documentation available to help us onboard and use the solution effectively",
      answer: "hese documents provide step-by-step instructions on how to use the software, its features, and functionalities. They can serve as a reference for users to navigate through the system effectively.The company should provide channels for support, such as email, phone, or chat, where you can reach out for assistance or clarification on any queries you may have.",
      open: false
    },
    {
      question:
        "How does the pricing structure for Kompass Connect/Kompass Lobby/Kompass Teams work",
      answer: "Many software solutions are offered on a subscription basis, where customers pay a recurring fee (monthly or annually) to access and use the software. The subscription fee is typically based on factors such as the number of users, features included, and the level of support provided.In some cases, the pricing structure may be customized based on the specific needs and requirements of the organization. This can involve negotiating pricing based on factors such as company size, usage volume, or additional services required.",
      open: false
    },
    {
      question:
        "Does Kompass have any discounts or promotional offers?  ",
      answer: "Yes, Kompass offers different discounts and promotional offers for its clients.  ",
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

      <div className="faqs">
        {faqs.map((faq, index) => (
          <FrequentlyAskQues faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>

  );
}
