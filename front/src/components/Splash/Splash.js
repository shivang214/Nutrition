import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Splash.css';

function Splash() {
  const navigate = useNavigate();
  const { innerWidth: width, innerHeight: height } = window;

  useEffect(() => {
    setTimeout(() => {
      navigate('/landing');
    }, 1500);
  }, [navigate]);

  return (
    <div className="splash" style={{ width, height }}>
      <div className="background-image" />
      <h1 className="title">Nutrition Counter</h1>
      <div className="loader"></div>
    </div>
  );
}

export default Splash;
