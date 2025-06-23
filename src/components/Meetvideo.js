import React from 'react';
import './Meetvideo.css';
import placevid from '../assets/placevid.mp4';

const Meetvideo = () => {
  return (
  <div className="instructor">
    <h2>Meet your Coach: Joseph Sudhip</h2>
    <div className="video-container">
      <video controls>
        <source src={placevid} type="video/mp4" />
      </video>
    </div>
  </div>
  );
};

export default Meetvideo;
