import React, { useState } from 'react';
import './FAQ.css'; // reuse existing FAQ styles

const studentFaqData = [
  {
    question: "What exactly is this course about?",
    answer: "This course helps you align your mind, heart, and gut so you can feel more focused, emotionally balanced, and confident in your decisions. It’s like mental fitness for real-life challenges—academic, personal, and social."
  },
  {
    question: "I’m already overwhelmed with college work. Will this take up a lot of my time?",
    answer: "No. It’s designed for busy students like you. Each module is short, practical, and easy to fit into your day—even during breaks or commutes."
  },
  {
    question: "How is this different from other self-help or productivity content online?",
    answer: "Unlike random tips, this is a structured, science-backed journey that targets the root of why you feel stuck, distracted, or unmotivated. It teaches you how to work with your brain, emotions, and intuition—not against them."
  },
  {
    question: "Will this really help with things like overthinking or peer pressure?",
    answer: "Yes. Many students who took the course said it helped them reduce overthinking, handle peer pressure better, and stop second-guessing themselves. It gives you clarity and inner confidence."
  },
  {
    question: "Do I need any prior knowledge or experience?",
    answer: "None at all. Whether you’re new to self-work or already into it, this course meets you where you are—and helps you grow from there."
  },
  {
    question: "What if I don’t feel any change after starting?",
    answer: "Real change takes time, but most students notice a shift within the first week. You’ll be guided through simple exercises that start showing results—subtly but powerfully."
  },
  {
    question: "Is there a free trial or way to test it before I commit?",
    answer: "Yes! You can try the demo version to experience what alignment feels like—before deciding to go deeper."
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
