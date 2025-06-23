import React from "react";
import { Link } from "react-router-dom";
import "./Program.css";

import stu from "../assets/stu.jpg";
import emp from "../assets/emp.jpg";
import exe from "../assets/exe.jpg";

const Program = () => {
  return (
    <div className="boxes-container">
      
      <div className="box">
        <div className="box-image">
          <img src={stu} alt="Students" />
        </div>
        <h2>Students</h2>
        <p>
       You’re told to chase success, but no one shows you how — or what path truly suits you. <br />
We help you find your way, using your strengths so success feels not distant, but already yours.

        </p>
        <Link to="/student-landing" className="btn-pri">
          Find your Way
        </Link>
      </div>

      <div className="box">
        <div className="box-image">
          <img src={emp} alt="Employees" />
        </div>
        <h2>Employees</h2>
        <p>
          You have to show up, meet deadlines and keep the machine running— but at what cost? <br />
We help you do it without draining your energy, so you feel good in work and life.


        </p>
        <Link to="/employee-landing" className="btn-pri">
          Discover Peace
        </Link>
      </div>

      <div className="box">
        <div className="box-image">
          <img src={exe} alt="Executives" />
        </div>
        <h2>Executives</h2>
        <p>
          You’re expected to lead teams, make decisions, and carry the weight no one sees — but it can feel lonely. <br />
We help you stay steady and sharp, so success isn’t just your goal — it becomes your story.


        </p>
        <Link to="/executive-landing" className="btn-pri">
          Lead Mindfully
        </Link>
      </div>

    </div>
  );
};

export default Program;
