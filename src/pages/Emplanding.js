import React from "react";
import Navbar from "../components/Navbar";
import "./Emplanding.css";
import vid from '../assets/freqvid.mp4'; 
import { Link } from "react-router-dom";
import empland from '../assets/empland.png';
import bgImage from '../assets/emplandcopy.png'; 
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




<>
          <section className="courses-section">
          
                <div className="courses-layout">
                  {/* Left scrollable content */}
                  <div className="left-scrollable">
                    <div className="course-card">
                      <div className="student-title-block">
                      </div>
                      <h3> Here’s what no one’s saying out loud — but you feel it every day.</h3>
                      <p>You wake up tired and go to bed feeling even more tired.<br />
Your back hurts, your eyes sting, and your shoulders feel heavy.<br />
You drink coffee to stay awake, but you still feel worn out by the end of the day.<br />
You keep working, going to meetings, and ticking off tasks — pretending everything’s fine.<br />
But your body is trying to tell you something, and you’re not listening.<br />
You’re not lazy — you’re just drained.<br />
What you need isn’t more effort, it’s real rest. <br />
 Don’t you want to feel light, clear, and like yourself again?
 </p>
          <pb>Yes, I’m done feeling heavy
          </pb>
                      
                    </div>
          
                    <div className="course-card">
                      <div className="student-title-block">
                        
                      </div>
                      <h3>Here’s what no one’s saying out loud — but you feel it every day.</h3>
                      <p>You wake up tired and go to bed feeling even more tired.<br />
Your back hurts, your eyes sting, and your shoulders feel heavy.<br/>
You drink coffee to stay awake, but you still feel worn out by the end of the day.<br/>
You keep working, going to meetings, and ticking off tasks — pretending everything’s fine.<br/>
But your body is trying to tell you something, and you’re not listening.<br/>
You’re not lazy — you’re just drained.<br/>
What you need isn’t more effort, it’s real rest.<br/>
 Don’t you want to feel light, clear, and like yourself again?
 </p>
          <pb>Yes, I’m done feeling heavy
          </pb>
                      
                    </div>
          
                    <div className="course-card">
                      <div className="student-title-block">
                        
                      
                      </div>
                      <h3>Here’s what no one’s saying out loud — but you feel it every day.</h3>
                      <p>You don’t feel joy like you used to.<br/>
Even the small things that once made you smile now barely register.<br/>
You do what you need to do each day, but something feels missing.<br/>
Your emotions feel dull, like you’re just getting through the day.<br/>
You say you’re “fine,” but deep down, you feel a little empty.<br/>
You miss the version of you that used to care.<br/>
The version that felt something.<br/>
This isn’t your fault — you’ve been in survival mode for too long<br/>
Don’t you want to feel truly alive again?
 </p>
          <pb>Yes, I’m done feeling numb 
          
          </pb>
                      
                    </div>
                    <div className="course-card">
                      <div className="student-title-block">
                        
                      
                      </div>
                      <h3>Here’s what no one’s saying out loud — but you feel it every day.</h3>
                      <p>You do your job. You hit the targets. You perform.<br/>
But it all feels like a loop — same week, same year, same you.<br/>
You want growth. You crave progress.<br/>
But deep down, you feel stuck. Like life is moving around you, not with you.<br/>
You’ve outgrown this version of yourself — but don’t know how to move forward.<br/>
You’re not unmotivated — you’re unchallenged, uninspired, and still discovering your purpose.<br/>
Don’t you want to feel like you’re becoming something again?

 </p>
          <pb> Yes, I’m done staying stuck 
          
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
