import React from 'react';
import './PainPoints.css';
import vid from '../assets/freqvid.mp4'; 


const PainPoints = () => {
  return (
    <section className="courses-section">
    
          <div className="courses-layout">
            {/* Left scrollable content */}
            <div className="left-scrollable">
              <div className="course-card">
                <div className="student-title-block">
                </div>
                <h3> This is about You</h3>
                <p>You’ve tried things. Picked paths. Hoped they’d feel right. <br />But nothing clicks. Nothing feels yours. <br/>
    You want clarity — but all you’ve got is pressure and noise. <br />
    Not because you lack ambition, but because you’ve never been taught how to listen to your own voice. <br/>
    Don’t you want to wake up with a direction that excites you? <br/>
    A path that feels right — not because it’s safe, but because it’s yours? </p>
    <pb>Yes, I want to finally choose my direction!
    </pb>
                
              </div>
    
              <div className="course-card">
                <div className="student-title-block">
                  
                </div>
                <h3>This is about You</h3>
                <p>You’ve learned bits of coding, design, writing, marketing… but nothing feels connected. <br/>
    When asked, “What are you good at?” — you freeze. <br/>
    It feels like you’re average at everything, building a puzzle with no clear picture.<br/>
    Others seem to have a path — you feel behind. <br/>
    But you’re not. Your efforts aren’t wasted.<br/>
    You just haven’t learned how to connect the dots yet.<br/>
    Do you want to align your skills and own your unique path? </p>
    <pb>Yes, I’m ready to make it all make sense!
    </pb>
                
              </div>
    
              <div className="course-card">
                <div className="student-title-block">
                  
                
                </div>
                <h3>This is about You</h3>
                <p>You say “yes” when you want to say “no.” <br/>
    You know what excites you — what sparks your curiosity.<br/>
    But when friends choose differently, you second-guess.<br/>
    You follow out of fear — of standing out, of walking alone.<br/>
    Not because you want to, but because it feels safer.<br/>
    Isn’t it time to choose a path that truly feels like yours? </p>
    <pb>Yes, I want to choose for ME this time!
    
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
      );
    };
    
export default PainPoints;
