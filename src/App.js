import React, { useState, useEffect } from 'react';
import './App.css';
import DayCard from './components/Daycard';
import challenges from './components/Challenges'; 
import brand_logo from './images/brand_logo.png';
import logo192 from './images/logo192.png'

const App = () => {
  const startDate = new Date('2025-02-10');
  const [currentDay, setCurrentDay] = useState(1);

  useEffect(() => {
    const today = new Date();
    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    setCurrentDay(diffDays + 1); 
  }, []);

  const days = Array.from({ length: 21 }, (_, index) => index + 1);

  return (
    <div className="App">
      <header className="additional-header">
        <img src={logo192} alt="Wellness Journey Icon" className="brand-logo" />
        <h2> 21 Day Challenge</h2>
      </header>

      <header className="app-header">
        <h1> 21-Day Wellness Journey</h1> 
        <h2>Transform your life, one day at a time</h2>
      </header>

      <div className="card-grid">
        {days.map(day => (
          <DayCard
            key={day}
            day={day}
            description={challenges[day]}
            currentDay={currentDay}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
