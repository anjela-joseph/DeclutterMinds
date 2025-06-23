import React from "react";
import Navbar from "../components/Navbar";
import PainPoints from "../components/PainPoints";
import StudentFAQ from '../components/StudentFAQ';
import "./Stulanding.css";
import { Link } from "react-router-dom";
import pic from '../assets/stuland.png';
import bgImage from '../assets/stulandcopy1.png'; 




const Stulanding = () => {
  return (
 <>

   
      <Navbar />

 <section
      className="clarity-section"
      style={{ backgroundImage: `url(${pic})` }}
    >
      <div className="clarity-overlay">
        <h1>
        Unlock Your Inner Powers
        </h1>
        <p>Are you out of sync? <br />
When your thoughts, emotions, and actions don't align, progress feels hard. <br/>
Take this 30-second quiz to check if your brain, heart, and gut are working together.

</p>
        <Link to="/quiz/student">
        <button className="clarity-btn">
          Take Quiz Now
        </button>
        </Link>
      </div>
    </section>




<>
      <PainPoints />
      
</>




        {/* Help Section */}
        <section className="wellness-section">
      <h2 className="section-title">But, is wanting change enough?<br />So, How will this proven path shift your mindset?</h2>

      <div className="wellness-content">
        <div className="wellness-block">
          <h3>✔ Guided Question Loop </h3>
          <p>
           Helps you see social situations differently — so you stop playing small and start standing tall.
          </p>
        </div>

        <div className="wellness-block">
          <h3>✔ Simple Visualization Hack</h3>
          <p>
            Connects you to what really matters — so your choices feel right, not rushed.
          </p>
        </div>

        <div className="wellness-block">
          <h3>✔ Decision Dominance Prompt</h3>
          <p>
            Gets you ready to lead — with clear thinking, steady confidence, and bold action.
          </p>
        </div>
      </div>
    </section>

    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '4rem 8vw',
        color: '#fff',
        flexWrap: 'wrap',
      }}
    >
      <div className="hero-content">
        <h1>You didn't come this far just to stop now</h1>
        <p></p>
        <div className="hero-buttons">
          <Link to="/course-page" className="btn btn-outline">
            Try the demo course
          </Link>
        </div>
      </div>
    </section>
    

<StudentFAQ />
</>

  );
};

export default Stulanding;
