import React from 'react';
import '../components/Daycard.css';
import challenges from './Challenges';

const DayCard = ({ day, currentDay }) => {
  const isPast = day < currentDay;
  const isCurrent = day === currentDay;
  const isFuture = day > currentDay;

  const decodeBase64 = (encoded) => {
    return atob(encoded);
  };

  let description = challenges[day];

  if (isPast || isCurrent) {
    description = decodeBase64(description);
  }

  if (isFuture) {
    description = "Haha! Better luck next time, the challenges are hidden. Wait until the day arrives!!";
  }

  let cardColor = '#FEEE91';
  let borderColor = '#E5C34B';
  let descriptionBorderColor = '#E5C34B';
  let descriptionStyle = {};

  if (isPast) {
    cardColor = '#A8CD89';
    borderColor = '#7A9F61';
    descriptionBorderColor = '#7A9F61';
  } else if (isCurrent) {
    cardColor = '#E8F9FF';
    borderColor = '#C1E4F7';
    descriptionBorderColor = '#C1E4F7';
  }

  if (isFuture) {
    descriptionStyle = { filter: 'blur(4px)' };
  }

  return (
    <div
      className={`day-card ${isPast ? 'past' : ''} ${isCurrent ? 'current' : ''} ${isFuture ? 'future' : ''}`}
      style={{ borderColor: borderColor }}
    >
      <div className="description-part" style={{ backgroundColor: cardColor, borderColor: descriptionBorderColor }}>
        <div className="card-description" style={descriptionStyle}>
          {description}
        </div>
      </div>

      <div className="day-part" style={{ backgroundColor: 'white', borderColor: borderColor }}>
        <div className="day-label">Day {day}</div>
      </div>
    </div>
  );
};

export default DayCard;
