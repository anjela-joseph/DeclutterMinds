import React, { useState } from 'react';
import './Login.css';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const fromQuiz = location.state?.fromQuiz || false;
  const quizAnswers = location.state?.answers || [];

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    try {
      // Login request
      const response = await axios.post('http://127.0.0.1:8000/api/accounts/login/', {
        email,
        password,
      });

      const accessToken = response.data.access;
      const refreshToken = response.data.refresh;
      const role = response.data.role;  // assuming backend returns this

      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('refresh_token', refreshToken);
      localStorage.setItem('user_role', role);

      // 🎯 If from quiz, send email and go to quiz result confirmation
      if (fromQuiz && quizAnswers.length > 0) {
        await axios.post(
          'http://127.0.0.1:8000/api/quiz/send-email/',
          { answers: quizAnswers },
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );

        console.log("Quiz results sent to email.");
        navigate('/quiz-result-sent');
      } else {
        // 🎯 Normal login → redirect based on role
        if (role === 'student') navigate('/student-landing');
        else if (role === 'employee') navigate('/employee-landing');
        else if (role === 'executive') navigate('/executive-landing');
        else navigate('/dashboard'); // fallback
      }

    } catch (err) {
      console.error(err);
      setError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="signup-page-container">
        <div className="signup-content-left"></div>
        <div className="signup-form-right">
          <div className="form-container">
            <h1>Welcome Back!</h1>

            <button type="button" className="btn-google">
              <img src="https://www.google.com/favicon.ico" alt="Google logo" className="google-icon" />
              Sign in with Google
            </button>

            <div className="divider"><span>or</span></div>

            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" required />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" required />
              </div>

              {error && <p className="error-message">{error}</p>}

              <button type="submit" className="btn-prim" disabled={loading}>
                {loading ? 'Logging in...' : 'Log In'}
              </button>

              <p className="form-footer">
                Don't have an account? <a href="/signup" className="text-primary">Create one</a>
              </p>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
