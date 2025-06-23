import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./StudentCoursePage.css";

import stu from "../assets/stu.jpg";
import emp from "../assets/emp.jpg";
import exe from "../assets/exe.jpg";
import sl1 from "../assets/sl1.jpg";
import sl2 from "../assets/sl2.jpg";
import slb from "../assets/slb.jpg";

const mediaData = {
  video: [
    { id: 1, thumbnail: stu, title: "Video 1", desc: "Description for video 1" },
    { id: 2, thumbnail: emp, title: "Video 2", desc: "Description for video 2" },
    { id: 3, thumbnail: exe, title: "Video 3", desc: "Description for video 3" },
    { id: 4, thumbnail: sl1, title: "Video 4", desc: "Description for video 4" },
    { id: 5, thumbnail: sl2, title: "Video 5", desc: "Description for video 5" },
  ],
  audio: [
    { id: 1, thumbnail: stu, title: "Audio 1", desc: "Description for audio 1" },
    { id: 2, thumbnail: emp, title: "Audio 2", desc: "Description for audio 2" },
    { id: 3, thumbnail: exe, title: "Audio 3", desc: "Description for audio 3" },
    { id: 4, thumbnail: sl1, title: "Audio 4", desc: "Description for audio 4" },
    { id: 5, thumbnail: sl2, title: "Audio 5", desc: "Description for audio 5" },
  ],
  downloads: [
    { id: 1, thumbnail: stu, title: "PDF 1", desc: "Downloadable file 1" },
    { id: 2, thumbnail: emp, title: "PDF 2", desc: "Downloadable file 2" },
    { id: 3, thumbnail: exe, title: "PDF 3", desc: "Downloadable file 3" },
    { id: 4, thumbnail: sl1, title: "PDF 4", desc: "Downloadable file 4" },
    { id: 5, thumbnail: sl2, title: "PDF 5", desc: "Downloadable file 5" },
  ],
};

const StudentCoursePage = () => {
  const [selectedType, setSelectedType] = useState("video");

  return (
    <>
      <Navbar />

      <div className="course-container">

        {/* TOP SECTION (Red Player Area) */}
        <div className="player-section">
          {/* You can place your video/audio player here later */}
          <div className="player-placeholder">
            <h2 style={{ color: "white" }}>Content Player Area</h2>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="media-section">

          {/* Media selector */}
          <div className="media-selector">
            <button onClick={() => setSelectedType("video")} className={selectedType === "video" ? "active" : ""}>Video</button>
            <button onClick={() => setSelectedType("audio")} className={selectedType === "audio" ? "active" : ""}>Audio</button>
            <button onClick={() => setSelectedType("downloads")} className={selectedType === "downloads" ? "active" : ""}>Downloadables</button>
          </div>

          {/* Media List */}
          <div className="media-list">
            {mediaData[selectedType].map((item) => (
              <div key={item.id} className="media-item">
                <img src={item.thumbnail} alt={item.title} className="media-thumbnail" />
                <div className="media-info">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default StudentCoursePage;
