// src/pages/Quiz.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // ✅ Reusable navbar
import '../pages/Quiz.css'; // Use this or App.css for styling

const questions = [
  "Do you quietly fear being stuck in your career?",
  "Do workplace conversations feel more draining than energizing?",
  "Do you still feel unmotivated even after a break or vacation?",
  "Does your role now feel low on creativity or challenge?",
  "Are your professional wins no longer as frequent or fulfilling?"
];

const EmpQuiz = () => {
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

export default EmpQuiz;
