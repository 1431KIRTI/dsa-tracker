import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const StreakPopup = ({ streak, onClose }) => {
  useEffect(() => {
    // Big celebration
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });

    const audio = new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3');
    audio.play();

    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [streak, onClose]);

  return (
    <div className="streak-popup">
      <h2>🎉 Hurray! {streak}-Day Streak! 🎉</h2>
    </div>
  );
};

export default StreakPopup;
