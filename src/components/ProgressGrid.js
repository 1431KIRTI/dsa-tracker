import React from "react";
import "./ProgressGrid.css";

function ProgressGrid({ solvedHistory }) {
  const today = new Date();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

  const days = Array.from({ length: daysInMonth }, (_, i) => {
    const date = new Date(today.getFullYear(), today.getMonth(), i + 1);
    const dateString = date.toLocaleDateString();
    const active = solvedHistory[dateString];
    return { date, active };
  });

  return (
    <div className="progress-grid">
      {days.map((d, i) => (
        <div
          key={i}
          className={`day-block ${d.active ? "active" : ""}`}
          title={d.date.toDateString()}
        />
      ))}
    </div>
  );
}

export default ProgressGrid;
