import React from "react";
import Navbar from "../components/Navbar";
import "./Emplanding.css";
import { Link } from "react-router-dom";
import empland from '../assets/empland.png';
import bgImage from '../assets/empland.png'; 
import StudentFAQ from '../components/EmployeeFAQ';






const emplanding = () => {
  return (
 <>

   
      <Navbar />

 <section
      className="clarity-section"
      style={{ backgroundImage: `url(${empland})` }}
    >
      <div className="clarity-overlay">
        <h1>
        What’s really happening to you at work?
        </h1>
        <p>When your thoughts, emotions, and instincts aren’t working together, even the work you love can feel like a struggle. <br/>
Take this 30-second quiz to check if your brain, heart, and gut are out of sync.

</p>
        
       <Link to="/quiz/employee">
               <button className="clarity-btn">
                 Take Quiz Now
               </button>
               </Link>
      </div>
    </section>




<section className="how-it-works">

{/* Step 1 */}
<div className="step">
  <div className="images">
    <img src="/images/woman.jpg" alt="Therapist 1" />
  </div>

  <div className="text">
<div className="how-it-works-wrapper">
  <h2 className="how-it-works-title-emp">Here’s what no one’s saying out loud — but you feel it every day.</h2>

    <p>
      You wake up tired and go to bed feeling even more tired. Your back hurts, 
      your eyes sting, and your shoulders feel heavy.
    </p>
    <p>
      You drink coffee to stay awake, but you still feel worn out by the end of 
      the day. You keep working, going to meetings, and ticking off tasks — 
      pretending everything’s fine.
    </p>
    <p>
      But your body is trying to tell you something, and you’re not listening. 
      You’re not lazy — you’re just drained.
    </p>
    <p>
      What you need isn’t more effort, it’s real rest. Don’t you want to feel 
      light, clear, and like yourself again?
    </p>

    <p className="cta-text">
      <strong>Yes, I’m done feeling heavy</strong>
    </p>
  </div>
</div>
</div>

      <div className="arrow">↓</div>

{/* Step 2 */}
<div className="step">
  <div className="images">
    <img src="/images/man-laptop.jpg" alt="Person on Laptop" />
  </div>

  <div className="text">
    <p>
      You wake up tired and go to bed feeling even more tired. Your back hurts, 
      your eyes sting, and your shoulders feel heavy.
    </p>
    <p>
      You drink coffee to stay awake, but you still feel worn out by the end of 
      the day. You keep working, going to meetings, and ticking off tasks — 
      pretending everything’s fine.
    </p>
    <p>
      But your body is trying to tell you something, and you’re not listening. 
      You’re not lazy — you’re just drained.
    </p>
    <p>
      What you need isn’t more effort, it’s real rest. Don’t you want to feel 
      light, clear, and like yourself again?
    </p>

    <p className="cta-text"><strong>Yes, I’m done feeling heavy</strong></p>
  </div>
</div>

<div className="arrow">↓</div>

{/* Step 3 */}
<div className="step">
  <div className="images">
    <img src="/images/woman.jpg" alt="Therapist 1" />
  </div>

  <div className="text">
    <p>
      You don’t feel joy like you used to. Even the small things that once made 
      you smile now barely register.
    </p>
    <p>
      You do what you need to do each day, but something feels missing. Your 
      emotions feel dull, like you’re just getting through the day.
    </p>
    <p>
      You say you’re “fine,” but deep down, you feel a little empty. You miss 
      the version of you that used to care — the version that felt something.
    </p>
    <p>
      This isn’t your fault — you’ve been in survival mode for too long. Don’t 
      you want to feel truly alive again?
    </p>

    <p className="cta-text"><strong>Yes, I’m done feeling numb</strong></p>
  </div>
</div>

    </section>




        {/* Help Section */}
        <section className="wellness-section">
      <h2 className="section-title">But is knowing this enough?<br />So, how will this proven shift bring your focus and energy back?</h2>

      <div className="wellness-content">
        <div className="wellness-block">
          <h3>✔	Energy Reclaim Loop  </h3>
          <p>
           Helps you break free from mindless routines — so you stay sharp, not just busy.
          </p>
        </div>

        <div className="wellness-block">
          <h3>✔ 1-Minute Grounding Cue</h3>
          <p>
            Brings your body and mind back in sync — so you feel calm, not scattered.
          </p>
        </div>

        <div className="wellness-block">
          <h3>✔ Purpose Reconnect Prompt
</h3>
          <p>
            Reminds you why you started — so you break free from stagnation, work feels meaningful and move forward with purpose
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
        <h1>You weren’t made to lose yourself in the work you care about.</h1>
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

export default emplanding;
