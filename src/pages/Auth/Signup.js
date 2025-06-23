import React, { useState } from 'react';
import './Signup.css';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import bgImage from '../../assets/signinbg.png';
import { useLocation, useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const fromQuiz = location.state?.fromQuiz || false;
  const quizAnswers = location.state?.answers || [];
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Basic validations
    if (data.password !== data.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    if (!/^\d{10}$/.test(data.contact)) {
      setError('Please enter a valid 10-digit contact number!');
      return;
    }

    try {
      // Signup user
      const signupRes = await axios.post('http://127.0.0.1:8000/api/accounts/signup/', {
        name: data.name,
        role: data.role,
        contact: data.contact,
        email: data.email,
        password: data.password,
        confirm_password: data.confirmPassword,
      });

      console.log('Signup success:', signupRes.data);
      setSuccess('Account created successfully! Logging in...');
      setTimeout(() => {
  if (fromQuiz) {
    navigate('/quiz', {
      state: {
        fromSignup: true,
        answers: quizAnswers
      }
    });
  } else {
    navigate('/login');
  }
}, 2000);
      e.target.reset();

      // Auto login after signup
      const loginRes = await axios.post('http://127.0.0.1:8000/api/accounts/login/', {
        email: data.email,
        password: data.password,
      });

      const accessToken = loginRes.data.access;
      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('refresh_token', loginRes.data.refresh);

      // If user came from quiz, send quiz results
      if (fromQuiz && quizAnswers.length > 0) {
        await axios.post('http://127.0.0.1:8000/api/quiz/send-email/', {
          answers: quizAnswers,
        }, {
          headers: { Authorization: `Bearer ${accessToken}` }
        });

        navigate('/quiz-result-sent');
      } else {
        navigate('/login');
      }

    } catch (err) {
      console.error('Signup error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Signup failed. Try again.');
    }
  };

  return (
    <>
      <Navbar />

      <main className="signup-page-container">
        <div className="signup-page" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="signup-content-left"></div>

          <div className="signup-form-right">
            <div className="form-container">
              <h1>Join Declutter Minds!</h1>

              <form id="signup-form" className="auth-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" name="name" required />
                </div>

                <div className="form-group">
                  <label>Role</label>
                  <select name="role" required>
                    <option value="">Select your role</option>
                    <option value="student">Student</option>
                    <option value="employee">Employee</option>
                    <option value="executive">Executive</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Contact Info</label>
                  <input type="text" name="contact" placeholder="Phone / WhatsApp" required />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" required />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input type="password" name="password" required />
                </div>

                <div className="form-group">
                  <label>Confirm Password</label>
                  <input type="password" name="confirmPassword" required />
                </div>

                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}

                <button type="submit" className="btn-prim">Create Account</button>
                <p className="form-footer">
                  Already have an account? <a href="/login" className="text-primary">Log in</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignupPage;
