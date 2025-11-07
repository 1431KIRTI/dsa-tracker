import React, { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  addMonths,
  subMonths,
} from "date-fns";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./ProgressGrid.css";

function ProgressGrid({ solvedHistory }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const start = startOfMonth(currentMonth);
  const end = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start, end });

  const getColorIntensity = (count) => {
    if (!count) return "#ffe8cc"; // light orange
    if (count === 1) return "#ffc98b";
    if (count === 2) return "#ffb74d";
    if (count === 3) return "#fb8c00";
    return "#ef6c00"; // darker orange for high activity
  };

  const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  return (
    <div className="progress-container">
      <div className="month-header">
        <button className="month-btn" onClick={handlePrevMonth}>
          <FiChevronLeft size={20} />
          <span>Prev</span>
        </button>

        <h3 className="month-title">{format(currentMonth, "MMMM yyyy")}</h3>

        <button className="month-btn" onClick={handleNextMonth}>
          <span>Next</span>
          <FiChevronRight size={20} />
        </button>
      </div>

      <div className="progress-grid">
        {days.map((day, i) => {
          const dateString = day.toLocaleDateString();
          const solvedCount = solvedHistory[dateString] || 0;
          return (
            <div
              key={i}
              className="day-block"
              title={`${format(day, "MMM d")}: ${solvedCount} solved`}
              style={{ backgroundColor: getColorIntensity(solvedCount) }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProgressGrid;
