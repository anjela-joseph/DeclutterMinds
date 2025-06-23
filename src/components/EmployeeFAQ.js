import React, { useState } from 'react';
import './FAQ.css'; // reuse existing FAQ styles

const studentFaqData = [
  {
    question:" What exactly does this course help with?",
    answer: "It helps you feel clear, focused, and steady again by aligning your mind, emotions, and instincts — so you're not just performing, but actually feeling good while doing it."
  },
  {
    question: "I’m showing up and doing my job — so why do I still feel off?",
    answer: "Because doing the work isn’t the same as feeling aligned. This course helps you connect your thoughts, emotions, and actions so that your effort feels energising, not draining."
  },
  {
    question: "How long does it take to see results?",
    answer: "Many notice subtle shifts within the first few days. The tools are simple to use and designed to create lasting change with consistent practice."
  },
  {
    question: "Will it help with burnout or feeling mentally drained? ",
    answer: "Yes. The course is built to reduce mental fatigue and emotional overload by helping you reconnect with your natural rhythm — so your energy feels more stable throughout the day. "
  },
  {
    question: "What if I don’t even know what’s wrong — I just feel off?",
    answer: "That’s exactly what this course is for. It helps you tune in to what your mind and body are really trying to say — so you can stop guessing and start feeling better with clarity."
  },
  {
    question: "Do I need to stop work or take time off to do this?",
    answer: "Not at all. These tools are designed to fit into your existing day — whether it’s a quick reset between meetings or a reflection at lunch."
  },
  {
    question: "7. I’ve been feeling disconnected for a while. Is it too late to reset?",
    answer: "Not at all. No matter how long you’ve felt off, your system knows how to find its rhythm again. This course is a gentle way to reconnect — without needing to start over."
  },
];

const StudentFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="student-faqs" className="faqs-section">
      <div className="faq-container">
        <h2> FAQs</h2>
        {studentFaqData.map((faq, index) => (
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
};

export default StudentFAQ;
