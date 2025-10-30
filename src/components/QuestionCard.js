import React, { useState } from "react";

function QuestionCard({ question, solved, toggleSolved }) {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className={`question-card ${solved ? "solved" : ""}`}>
      <label>
        <input
          type="checkbox"
          checked={solved}
          onChange={() => toggleSolved(question.id)}
        />
        {question.text}
      </label>

      {/* Display time estimate */}
      <div style={{ marginTop: "5px", fontSize: "14px", color: "#555" }}>
        ⏱️ Estimated Time: {question.time} min
      </div>

      <button
        onClick={() => setShowHint(!showHint)}
        style={{
          marginTop: "10px",
          background: "#ff9800",
          color: "white",
          border: "none",
          padding: "5px 10px",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        {showHint ? "Hide Hint" : "Show Hint"}
      </button>

      {showHint && (
        <div
          style={{
            marginTop: "10px",
            padding: "10px",
            background: "#fff3cd",
            borderRadius: "5px",
            color: "#856404"
          }}
        >
          💡 {question.hint}
        </div>
      )}
    </div>
  );
}

export default QuestionCard;
