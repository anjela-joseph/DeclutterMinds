import React from 'react';
import './Title.css';
import bgImage from '../assets/Titlebg.png'; 
import { Link } from "react-router-dom";

const Title = () => {
    return (
        <div
            className="title"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="title-text">
                <h1>Your brain knows the truth.<br />
                    Your heart feels it.<br />
                    Your gut senses it.
                </h1>
                <p>But what happens when they don’t match?<br />
                    You feel stuck, tired, and unsure what to do next.<br />
                    Not sure what’s really going on inside you?<br />
                    Take this 30-second quiz to discover your inner clarity .
                </p>
                <Link to="/quiz">
                    <button>Take your "inner-clarity" quiz now →</button>
                </Link>
            </div>
        </div>
    );
};

export default Title;
