// src/pages/Quiz.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // ✅ Reusable navbar
import '../pages/Quiz.css'; // Use this or App.css for styling

const questions = [
  "Do you struggle to explain what makes you uniquely skilled?",
  "Do you often delay important choices because you're unsure what truly fits you?",
  "Do you feel like you’re good at many things, but still unsure what you're really meant to do?",
  "Do you feel like you’re not moving in the direction you once imagined?",
  "Do you feel unsure how all the courses and skills you've picked up actually fit together?"
];

const ExeQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (response) => {
    const updatedAnswers = [...answers, response];
    setAnswers(updatedAnswers);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const yesCount = answers.filter(ans => ans === 'yes').length;

  const getMessage = () => {
    if (yesCount <= 2) {
      return "You're beginning to notice the misalignment. This is a critical moment to pause, reflect, and explore where your path is truly taking you.";
    } else if (yesCount <= 4) {
      return "You’re in the thick of it. There’s confusion in how your efforts fit together. Our course is built to help you converge your strengths.";
    } else {
      return "A reset is overdue. You may need a step-by-step realignment from the inside out. Our tools help you reconnect with your inner compass.";
    }
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h1 className="heading">Alignment Quiz</h1>

        {!showResult ? (
          <div className="quiz-box">
            <h2 className="subheading">Question {current + 1} of {questions.length}</h2>
            <p className="question">{questions[current]}</p>
            <div className="button-group">
              <button className="answer-btn" onClick={() => handleAnswer('yes')}>Yes</button>
              <button className="answer-btn" onClick={() => handleAnswer('no')}>No</button>
            </div>
          </div>
        ) : (
          <div className="result-box">
            <h2 className="section-title">Your Results</h2>
            <p>{getMessage()}</p>
            <a href="/course-page" className="login-btn">Try the Demo Now</a>
          </div>
        )}
      </div>
    </>
  );
};

export default ExeQuiz;
