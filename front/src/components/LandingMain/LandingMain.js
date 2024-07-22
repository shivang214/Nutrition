import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingMain.css';

function LandingMain() {
  const navigate = useNavigate();
  const { innerWidth: width, innerHeight: height } = window;

  return (
    <div className="landing-main" style={{ width, height }}>
      <div className="background-image" />
      <button
        className="start-button"
        onClick={() => navigate('/upload-data')}
      >
        START
      </button>
    </div>
  );
}

export default LandingMain;
