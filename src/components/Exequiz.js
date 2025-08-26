import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (response) => {
    const updatedAnswers = [...answers, response];
    setAnswers(updatedAnswers);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
    setShowLogin(true);
    }
  };



  

  const generateResultMessage = () => {
    const yesCount = answers.filter(ans => ans === 'yes').length;
    if (yesCount <= 2) {
      return "You're beginning to notice the misalignment. This is a critical moment to pause, reflect, and explore where your path is truly taking you.";
    } else if (yesCount <= 4) {
      return "You’re in the thick of it. There’s confusion in how your efforts fit together. Our course is built to help you converge your strengths.";
    } else {
      return "A reset is overdue. You may need a step-by-step realignment from the inside out. Our tools help you reconnect with your inner compass.";
    }
  };

    const handleLoginAndSend = async () => {
    try {
      setIsSending(true);

      const res = await axios.post('http://127.0.0.1:8000/api/token/', { email, password });
      const token = res.data.access;

      const message = generateResultMessage();

      await axios.post('http://127.0.0.1:8000/api/send-quiz-email/', { message }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      alert("✅ Your quiz result has been sent to your email!");
      setShowLogin(false);
      navigate('/course-page');
    } catch (err) {
      console.error(err);
      alert("❌ Login failed or email not sent. Please check your credentials.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Navbar />
<div className="progress-bar">
  {questions.map((_, index) => (
    <span
      key={index}
      className={`progress-step ${index <= current ? "active" : ""}`}
    ></span>
  ))}
</div>
      <div className="container">
        <h1 className="heading">Alignment Quiz</h1>

         {/* Quiz Questions */}
        {current < questions.length && (
          <div className="quiz-box">
            <h2>Question {current + 1} of {questions.length}</h2>
            <p>{questions[current]}</p>
            <div className="button-group">
              <button onClick={() => handleAnswer('yes')}>Yes</button>
              <button onClick={() => handleAnswer('no')}>No</button>
            </div>
          </div>
        )}

        {/* Login to receive result */}
        {showLogin && (
          <div className="login-modal">
            <h3>Login to get your result via email</h3>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button onClick={handleLoginAndSend} disabled={isSending}>
              {isSending ? 'Sending...' : 'Submit'}
            </button>
            <p>
              Don't have an account?{' '}
              <button
                className="text-link"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#007bff',
                  cursor: 'pointer',
                  padding: 0,
                  fontSize: 'inherit'
                }}
                onClick={() =>
                  navigate('/signup', {
                    state: {
                      fromQuiz: true,
                      answers: answers
                    }
                  })
                }
              >
                Create one
              </button>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ExeQuiz;
