import React, { useState } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import ShowingWelcome from "./ShowingWelcome";
import signIn from "../../../assets/Nimages/Appointment/signIn.png";
import screening from "../../../assets/Nimages/Appointment/screening.png";
import registration from "../../../assets/Nimages/Appointment/registration.png";
import digital from "../../../assets/Nimages/Appointment/digital.png";
import analytics from "../../../assets/Nimages/Appointment/analytics.png";
import instant from "../../../assets/Nimages/Appointment/instant.png";
import photoCapture from "../../../assets/Nimages/Appointment/photoCapture.png";
import printing from "../../../assets/Nimages/Appointment/printing.png";

export default function Visitor() {
  const [faqs, setFaqs] = useState([
    {
      question: "Easy sign-in",
      answer:
        "Create multiple sign-in flows that ask different questions based on the purpose of the guest’s visit.",
      image: signIn,
      open: false,
    },
    {
      question: "Visitor screening",
      answer:
        "Set criteria visitors must meet to come on-site, including proof of vaccination and watch list screening.",
      open: false,
      image: screening,
    },

    {
      question: "Registration",
      answer:
        "Add upcoming visitors to let your team know who to expect and email guests information about their visit",
      open: false,
      image: registration,
    },
    {
      question: "Digital document signing",
      answer:
        "Prompts guests to sign agreements, like NDAs and waivers, on the iPad during sign in.",
      open: false,
      image: digital,
    },
    {
      question: "Analytics and reporting",
      answer:
        "Get insight into visitor volume, who hosts visitors and more. Export data in a few clicks.",
      open: false,
      image: analytics,
    },
    {
      question: "Instant notifications",
      answer: "Automatically notify employees when their guests arrive.",
      open: false,
      image: instant,
    },
    {
      question: "Photo capture",
      answer:
        "Ask guests to take a photo so their host can greet them with confidence.",
      open: false,
      image: photoCapture,
    },
    {
      question: "Badge printing",
      answer:
        "Automatically print badges when visitors sign in. Even create custom badges.",
      open: false,
      image: printing,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
      <div className="vfaqs">
        {faqs.slice(0, 4).map((faq, index) => (
          <ShowingWelcome
            faq={faq}
            index={index}
            key={index}
            toggleFAQ={toggleFAQ}
          />
        ))}
      </div>
      <div className="vfaqs">
        {faqs.slice(4, 8).map((faq, index) => (
          <ShowingWelcome
            faq={faq}
            index={index + 4}
            key={index + 4}
            toggleFAQ={toggleFAQ}
          />
        ))}
      </div>
    </div>
  );
}
