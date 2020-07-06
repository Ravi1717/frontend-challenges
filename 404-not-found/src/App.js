import React from "react";
import image from "./images/Scarecrow.png";
import "./App.css";

function App() {
  return (
    <div className="page-container">
      <div className="header">
        <h1 className="title font-typo">404 Not Found</h1>
      </div>
      <div className="main-section">
        <div className="image-container">
          <img src={image} alt="Scarecrow 404" />
        </div>
        <div className="content-container">
          <h2 className="content-title font-typo">I have bad news for you</h2>
          <p className="content-description font-typo">
            The page you are looking for might be removed or is temporarily
            available
          </p>
          <button className="back-to-home-button font-typo">
            Back to Home
          </button>
        </div>
      </div>
      <div className="footer">
        <p className="author-details font-typo">
          Ravi Verma @
          <a target="_blank" href="https://www.devchallenges.io/">
            DevChallenges.io
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
