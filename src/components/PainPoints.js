import React from 'react';
import './PainPoints.css';
import stupain from '../assets/stupain.jpg';
import confused from '../assets/confused.jpeg';
import pressure from '../assets/pressure.jpg';


const PainPoints = () => {
  return (
<section className="how-it-works">

{/* Step 1 */}
<div className="step">
  <div className="images">
    <img src={stupain}/>
    <img src={confused} />
    <img src={pressure} />
  </div>

  <div className="text">
<div className="how-it-works-wrapper">
  <h2 className="how-it-works-title-stu">This is about You</h2>

  <p>You’ve tried things. Picked paths. Hoped they’d feel right.
    But nothing clicks. Nothing feels yours.</p>
<p>
    You want clarity — but all you’ve got is pressure and noise. 
    Not because you lack ambition, but because you’ve never been taught how to listen to your own voice. </p>
<p>
    Don’t you want to wake up with a direction that excites you? <br/>
    A path that feels right — not because it’s safe, but because it’s yours? </p>

    <p className="cta-text">
      <strong>Yes, I want to finally choose my direction!</strong>
    </p>
  </div>
</div>
</div>

      <div className="arrow">↓</div>

{/* Step 2 */}
<div className="step">
  <div className="images">
    <img src={stupain}/>
    <img src={confused} />
    <img src={pressure} />
  </div>

  <div className="text">
   <p>You’ve learned bits of coding, design, writing, marketing… but nothing feels connected. 
    When asked, “What are you good at?” — you freeze. </p>
<p>
    It feels like you’re average at everything, building a puzzle with no clear picture.
    Others seem to have a path — you feel behind. </p>
<p>
    But you’re not. Your efforts aren’t wasted.<br/>
    You just haven’t learned how to connect the dots yet.<br/>
    Do you want to align your skills and own your unique path? </p>

    <p className="cta-text"><strong>Yes, I’m ready to make it all make sense!</strong></p>
  </div>
</div>

<div className="arrow">↓</div>

{/* Step 3 */}
<div className="step">
  <div className="images">
    <img src={stupain}/>
    <img src={confused} />
    <img src={pressure} />
  </div>

  <div className="text">
    <p>You say “yes” when you want to say “no.”
    You know what excites you — what sparks your curiosity.</p>
<p>
    But when friends choose differently, you second-guess.
    You follow out of fear — of standing out, of walking alone.</p>
<p>
    Not because you want to, but because it feels safer.
    Isn’t it time to choose a path that truly feels like yours? </p>

    <p className="cta-text"><strong>Yes, I want to choose for ME this time!</strong></p>
  </div>
</div>

    </section>
      );
    };
    
export default PainPoints;
