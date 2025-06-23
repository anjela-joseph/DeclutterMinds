import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoleSelector.css';

const RoleSelector = () => {
  const navigate = useNavigate();

  const handleSelection = (role) => {
    navigate(`/quiz/${role}`); // will route to /quiz/student, /quiz/employee, etc.
  };

  return (
    <div className="role-selector">
      <h2>Who are you?</h2>
      <p>Select your role to begin your quiz.</p>
      <div className="role-buttons">
        <button onClick={() => handleSelection('student')}>Student</button>
        <button onClick={() => handleSelection('employee')}>Employee</button>
        <button onClick={() => handleSelection('executive')}>Executive</button>
      </div>
    </div>
  );
};

export default RoleSelector;
