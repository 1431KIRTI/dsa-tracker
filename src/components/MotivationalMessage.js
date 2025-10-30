import React from 'react';

const messages = [
  "Consistency beats talent. Keep going!",
  "Just 20 minutes today can change your future!",
  "You can do it! Don’t give up!",
  "Every problem you solve brings you closer to mastery.",
];

const MotivationalMessage = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  return (
    <div className="motivation">
      {message}
    </div>
  );
};

export default MotivationalMessage;
