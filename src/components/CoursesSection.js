import React from "react";
import "./CoursesSection.css";
import { FaUserGraduate, FaUsers, FaChalkboardTeacher } from "react-icons/fa";
import stupain from '../assets/stupain.jpg';
import therapistImg from '../assets/exelandcopy.png';


const CoursesSection = () => {
  return (
    <>
      {/* Courses Section */}
      <section className="courses-section">
        <h2 className="course-heading">
          Empower your Brain, Heart, and Gut
          <br />
          with our tailored courses
        </h2>
      </section>

      {/* Therapists Section */}
      <section className="therapists-section">
        <div className="therapists-text">
          <h2>You’re told to chase success, but no one shows you how — or what path truly suits you</h2>
          <p>
            We show you what way leads to success for you- 
 what matches your nature, your strengths, and the way you work best.
We’ll show you how to use your strengths with confidence and calm.
Step by step, you’ll move ahead`
So that success doesn’t feel far — it feels like it’s already yours.
          </p>
          <button>Your way to success starts here →</button>
        </div>

        

    <div className="therapist-image">
      <img 
        src={stupain}
        alt="Therapist" 
        style={{ width: "300px", borderRadius: "12px" }}
      />
    </div>
      </section>
      {/* Therapists Section */}
      <section className="therapists-section">
        <div className="therapists-text">
          <h2>You have to show up, meet deadlines and keep the machine running— but at what cost?</h2>
          <p>
            Your body is tired. Your brain is full.  Your energy is drained.
We show you how you can be your best at work, without losing yourself.
So, you don’t just get better at your job, you feel better in your life.
You stay steady, feel good, and look forward to each day. <br />
Because success shouldn’t make you tired — it should make you proud.
          </p>
          <button>Build the kind of success you can enjoy →</button>
        </div>

    <div className="therapist-image">
      <img 
        src="/images/woman-main.jpg" 
        alt="Therapist" 
        style={{ width: "300px", borderRadius: "12px" }}
      />
    </div>
      </section>
      {/* Therapists Section */}
      <section className="therapists-section">
        <div className="therapists-text">
          <h2>You’re expected to lead teams, make decisions, and carry the weight no one sees — but it can feel lonely.</h2>
          <p>
            You’re expected to lead teams, make decisions, and carry the weight no one sees.
But when every choice is yours, it can feel lonely.
We help you stay at your best, even when it’s tough.
We help you make smart decisions, every single time.
We help you stay steady, no matter what comes.
So that Success isn’t just your goal — it’s your story.
          </p>
          <button>Make success your everyday →</button>
        </div>

    <div className="therapist-image">
      <img 
        src="/images/woman-main.jpg" 
        alt="Therapist" 
        style={{ width: "300px", borderRadius: "12px" }}
      />
    </div>
      </section>
    </>
  );
};

export default CoursesSection;
