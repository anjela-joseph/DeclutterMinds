import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProgramPage from './pages/ProgramPage';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Stulanding from './pages/Stulanding';
import StudentCoursePage from './pages/StudentCoursePage';
import Emplanding from './pages/Emplanding';
import Exelanding from './pages/Exelanding';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Quiz from './pages/Quiz';
import EmpQuiz from './components/Empquiz';
import ExeQuiz from './components/Exequiz';
import RoleSelector from './components/RoleSelector'; // The "Who are you?" screen


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<ProgramPage />} />
        <Route path="/student-landing" element={<Stulanding />} />
        <Route path="/employee-landing" element={<Emplanding />} />
        <Route path="/executive-landing" element={< Exelanding />} />
        <Route path="/quiz" element={<RoleSelector />} />
        <Route path="/quiz/student" element={<Quiz />} />
        <Route path="/quiz/employee" element={<EmpQuiz />} />
        <Route path="/quiz/executive" element={<ExeQuiz />} />
        <Route path="/course-page" element={<StudentCoursePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
