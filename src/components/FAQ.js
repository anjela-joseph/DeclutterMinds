import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './FAQ.css';

const faqData = [
  {
    question: "What is this course really about?",
    answer:
      "It’s about helping you understand yourself better — your brain, your emotions, and your inner drive, so that you can reach success without feeling lost or tired.",
  },
  {
    question: "Who is this course for?",
    answer:
      "Whether you’re a student, working professional, or a leader — if you’ve ever felt stuck, drained, or unsure about your next step, this is for you.",
  },
  {
    question: "How is this different from other self-help or productivity courses?",
    answer:
      "We don’t give you just tips — we guide you to listen to your brain, heart, and gut together. The tools are rooted in science and ancient wisdom, designed and tested to bring real, lasting change.",
  },
  {
    question: "I’m really busy. Can I still take this course?",
    answer:
      "Yes. The course is designed in short, easy steps you can do at your own pace — even on a busy day.",
  },
  {
    question: "Will this actually help me feel better?",
    answer:
      "Many who’ve taken the course say they feel clearer, more confident, and less stressed. It won’t fix everything overnight — but it gives you the tools to help yourself, every day.",
  },
  {
    question: "What will I learn inside?",
    answer:
      "This course gives you simple tools and techniques, rooted in neuroscience and ancient wisdom — to bring your brain, heart, and gut together. So that your inner powers work as one, helping you move forward with purpose and confidence.",
  },
  {
    question: "Can I try it before signing up?",
    answer:
      "Yes. You can try a free experience to get a feel for how it works — and how it can work for you.",
  },
];

const FAQ = () => {
 const [openIndex, setOpenIndex] = useState(null);
  const location = useLocation(); // ✅ this is the correct usage

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (location.state?.scrollTo === 'faqs') {
      const el = document.getElementById('faqs');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]); // ✅ optional: this warning is fine, ignore or disable if preferred


 return (
  <div id="faqs" className="faqs-section">
    <div className="faq-container">
      <h2>FREQUENTLY ASKED QUESTIONS</h2>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span>{openIndex === index ? '−' : '+'}</span>
          </button>
          {openIndex === index && (
            <p className="faq-answer">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  </div>
);
}

export default FAQ;
