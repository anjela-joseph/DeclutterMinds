import React from "react";
import Navbar from "../components/Navbar";
import "./Exelanding.css";
import vid from '../assets/freqvid.mp4'; 
import { Link } from "react-router-dom";
import exeland from '../assets/homebg.jpg';
import bgImage from '../assets/homebg.jpg'; 






const exelanding = () => {
  return (
 <>

   
      <Navbar />

 <section
      className="clarity-section"
      style={{ backgroundImage: `url(${exeland})` }}
    >
      <div className="clarity-overlay">
        <h1>
        Lead with Inner Precision
        </h1>
        <p>
Even the sharpest leaders feel off when their internal alignment is missing. <br />
Discover if your brain, heart, and gut are driving in the same direction.
</p>
        
        <Link to="/quiz/executive">
                <button className="clarity-btn">
                  Take Quiz Now
                </button>
                </Link>
      </div>
    </section>




<>
          <section className="courses-section">
          
                <div className="courses-layout">
                  {/* Left scrollable content */}
                  <div className="left-scrollable">
                    <div className="course-card">
                      <div className="student-title-block">
                      </div>
                      <h3>Even the Strongest Minds get Tired</h3>
                      <p>You used to respond. Now, you react.<br />
Irritation creeps in. Patience wears thin.<br />
Tiny things set you off — emails, delays, people.<br />
You don’t want to be this person.<br/>
But the constant weight of pressure has made your emotions louder than your logic.<br/>
And behind the control… there’s fatigue. Frustration. Guilt.<br/>
This isn’t who you are — it’s who stress is turning you into.<br/>
Don’t you want to lead with calm, presence, and control again?
 </p>
          <pb>Yes, I want to lead from calm again.
          </pb>
                      
                    </div>
          
                    <div className="course-card">
                      <div className="student-title-block">
                        
                      </div>
                      <h3>Even the Strongest Minds get Tired</h3>
                      <p>You make a hundred decisions a day — and every single one takes something from you.<br/>
Eventually, even the simplest choices feel heavy.<br/>
You delay more. Over-analyse. Second-guess.<br/>
You’re efficient on the outside… but mentally maxed out.<br/>
And no one knows how hard it is just to keep thinking straight.<br/>
Don’t you want to think clearly again and lead without the mental fog?
</p>
          <pb>Yes, I want my clarity back
          </pb>
                      
                    </div>
          
                    <div className="course-card">
                      <div className="student-title-block">
                        
                      
                      </div>
                      <h3>Even the Strongest Minds get Tired</h3>
                      <p>You’ve always trusted your instincts. That sharp inner compass.<br/>
But now? Everything feels... foggy.<br/>
You overthink. You question. You play it safe.<br/>
You listen to every voice except your own.<br/>
And in quiet moments — if you even get any — you realize:<br/>
You’re not out of ideas. You’re out of focus.<br/>
You’re not lost — just not listening to yourself.<br/>
Isn’t it time to feel sure of yourself again?
 </p>
          <pb>Yes, I want to trust myself again
          
          </pb>
                      
                    </div>
                  </div>
          
                  
                  <div className="right-fixed">
        <video
          src={vid}
            autoPlay
                  loop
                  muted
          alt="Instructor"
          className="background-image"
        />
      </div>
      
                </div>
              </section>
      
</>




        {/* Help Section */}
        <section className="wellness-section">
      <h2 className="section-title">Is sharp thinking enough when your decision-making feels off?<br />How does this proven method help you stay clear, focused, and in control—especially under pressure?</h2>

      <div className="wellness-content">
        <div className="wellness-block">
          <h3>✔ Strategic Reflection Loop </h3>
          <p>
           Helps you handle power plays with calm focus.
          </p>
        </div>

        <div className="wellness-block">
          <h3>✔ Identity Anchoring Cue</h3>
          <p>
            Keeps you grounded in your values under pressure.
          </p>
        </div>

        <div className="wellness-block">
          <h3>✔ Authority Activation Prompt</h3>
          <p>
            Supports you in leading with confidence, not reacting.
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
        <h1>Critical decisions need deep clarity.</h1>
        <p></p>
        <div className="hero-buttons">
          <Link to="/course-page" className="btn btn-outline">
            Try the demo course
          </Link>
        </div>
      </div>
    </section>
    </>
  );
};

export default exelanding;
