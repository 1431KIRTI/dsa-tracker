import React from "react";
import ProgressGrid from "../components/ProgressGrid";
import {
  PieChart, Pie, Cell, Tooltip, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from "recharts";
import "./TrackerPage.css";

function TrackerPage({ solvedHistory, setView }) {
  // Aggregate all solved questions from history
  const difficultyCount = { Easy: 0, Medium: 0, Hard: 0 };
  const topicCount = {};

  Object.values(solvedHistory || {}).forEach(questionsArray => {
    questionsArray.forEach(q => {
      if (q.difficulty) difficultyCount[q.difficulty]++;
      if (q.topic) topicCount[q.topic] = (topicCount[q.topic] || 0) + 1;
    });
  });

  const difficultyData = [
    { name: "Easy", value: difficultyCount.Easy },
    { name: "Medium", value: difficultyCount.Medium },
    { name: "Hard", value: difficultyCount.Hard },
  ];

  const topicData = Object.keys(topicCount).map(topic => ({
    name: topic,
    solved: topicCount[topic]
  }));

  const COLORS = ["#4caf50", "#ff9800", "#f44336"];

  return (
    <div className="tracker-page">
      <h2>📊 Your DSA Journey</h2>
      <p>Track how consistent you’ve been every day!</p>

      <ProgressGrid solvedHistory={solvedHistory} />

      <div className="charts-container">
        <div className="chart-box">
          <h3>By Difficulty</h3>
          <PieChart width={300} height={250}>
            <Pie
              data={difficultyData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {difficultyData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        <div className="chart-box">
          <h3>By Topic</h3>
          <BarChart width={350} height={250} data={topicData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="solved" fill="#2196f3" />
          </BarChart>
        </div>
      </div>

      <button className="back-btn" onClick={() => setView("main")}>🏠 Home</button>
    </div>
  );
}

export default TrackerPage;
