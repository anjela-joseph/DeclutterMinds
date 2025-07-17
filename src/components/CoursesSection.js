import React from 'react';
import './CoursesSection.css';
import { FaUserGraduate, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';
import titlevid from '../assets/freqvid.mp4';

const CoursesSection = () => {
  return (
    <section className="courses-section">
      <h2 className="course-heading">
        Empower your Brain, Heart, and Gut<br />
        with our tailored courses
      </h2>

      <div className="courses-layout">
        {/* Left scrollable content */}
        <div className="left-scrollable">
          <div className="course-card">
            <div className="student-title-block">
              <FaUserGraduate className="course-icon" />
              <div className="label-bar">STUDENTS</div>
            </div>
            <h3>You’re told to chase success, but no one shows you how — or what path truly suits you.</h3>
            <p>We show you what way leads to success for you- 
 what matches your nature, your strengths, and the way you work best.
We’ll show you how to use your strengths with confidence and calm.
Step by step, you’ll move ahead`
So that success doesn’t feel far — it feels like it’s already yours.

</p>
            <a href="Student-landing" className="learn-more">Your way to success starts here →</a>
          </div>

          <div className="course-card">
            <div className="student-title-block">
              <FaUsers className="course-icon" />
              <div className="label-bar">EMPLOYEES</div>
            </div>
            <h3>You have to show up, meet deadlines and keep the machine running— but at what cost?</h3>
            <p>Your body is tired. Your brain is full.  Your energy is drained.
We show you how you can be your best at work, without losing yourself.
So, you don’t just get better at your job, you feel better in your life.
You stay steady, feel good, and look forward to each day. <br />
Because success shouldn’t make you tired — it should make you proud.

</p>
            <a href="Employee-landing" className="learn-more">Build the kind of success you can enjoy →</a>
          </div>

          <div className="course-card">
            <div className="student-title-block">
              <FaChalkboardTeacher className="course-icon" />
              <div className="label-bar">EXECUTIVES</div>
            </div>
            <h3>You’re expected to lead teams, make decisions, and carry the weight no one sees — but it can feel lonely.</h3>
            <p>You’re expected to lead teams, make decisions, and carry the weight no one sees.
But when every choice is yours, it can feel lonely.
We help you stay at your best, even when it’s tough.
We help you make smart decisions, every single time.
We help you stay steady, no matter what comes.
So that Success isn’t just your goal — it’s your story.

</p>
            <a href="Executive-landing" className="learn-more">Make success your everyday →</a>
          </div>
        </div>

        {/* Right fixed video */}
        <div className="right-fixed">
          <video
            src={titlevid}
            autoPlay
            loop
            muted
            className="background-video"
          />
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
