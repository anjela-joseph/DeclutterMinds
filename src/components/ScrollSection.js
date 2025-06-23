import React from 'react';
import './ScrollSection.css';
import emp from '../assets/emp.jpg'; 
import img1 from '../assets/sl1.jpg';
import img3 from '../assets/sl3.jpg';
import stu from '../assets/stu.jpg';


const images = [emp, img1, img3,emp, stu]; 
const ScrollSection = () => {
  return (
    <section className="scroll-section">
      <div className="scroll-text">
        <h1>Rooted in Wisdom,<br />Proven by Science</h1>
        <pb>
          Designed by experts in neuroscience and ancient wisdom. </pb>
          <p>
Easy steps. Quiet focus.<br />
So that your brain feels clear.<br />
Your heart feels calm.<br />
Your gut feels right.<br />
So, you can be fully you and do your best, again and again.

        </p>
        <button> Get a feel for what’s possible. →</button>
      </div>

   <div className="scroll-gallery">
  {[0, 1].map((col) => (
    <div className={`column ${col === 1 ? 'staggered' : ''}`} key={col}>
      {[...images, ...images]
        .filter((_, index) => index % 2 === col)
        .map((src, index) => (
          <img key={index} src={src} alt={`img-${index}`} />
        ))}
    </div>
  ))}
</div>

    </section>
  );
};

export default ScrollSection;