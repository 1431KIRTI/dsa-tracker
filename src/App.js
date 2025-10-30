import React, { useState, useEffect } from 'react';
import TopicSelector from './components/TopicSelector';
import QuestionCard from './components/QuestionCard';
import TrackerPage from './pages/TrackerPage';
import { questions } from './data/questions';
import confetti from 'canvas-confetti';
import './App.css';

function App() {
  const topics = Object.keys(questions);
  const difficulties = ['Easy', 'Medium', 'Hard'];

  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [dailyQuestions, setDailyQuestions] = useState([]);
  const [solvedQuestions, setSolvedQuestions] = useState([]);
  const [todayDate, setTodayDate] = useState('');
  const [showCelebration, setShowCelebration] = useState(false);
  const [view, setView] = useState("main"); // "main" or "tracker"

  const motivationalLines = [
    "🔥 Consistency beats talent! You got this! 💪",
    "⏰ Just 20 minutes today can change your future! 🚀",
    "💡 Every problem you solve brings you closer to mastery! ✨",
    "🌟 Keep going! Your effort will pay off! 🏆",
    "💪 Solve today, shine tomorrow! 🌈",
    "🚀 Small steps every day lead to giant leaps! 🌟"
  ];

  // Set date
  useEffect(() => {
    const now = new Date();
    const dateString = now.toLocaleDateString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setTodayDate(dateString);
  }, []);

  // Celebration voice
  useEffect(() => {
    if (showCelebration) {
      const utterance = new SpeechSynthesisUtterance("Hurray! You did it!");
      utterance.rate = 1;
      utterance.pitch = 1;
      const voices = window.speechSynthesis.getVoices();
      const selectedVoice = voices.find(v => v.lang.includes('en')) || voices[0];
      utterance.voice = selectedVoice;
      window.speechSynthesis.speak(utterance);
    }
  }, [showCelebration]);

  // Get questions
  const getQuestions = () => {
    if (!selectedTopic || !selectedDifficulty) return;
    const topicQuestions = questions[selectedTopic][selectedDifficulty];
    let count = selectedDifficulty === 'Easy' ? 3 : selectedDifficulty === 'Medium' ? 2 : 1;
    const shuffled = [...topicQuestions].sort(() => 0.5 - Math.random());
    setDailyQuestions(shuffled.slice(0, count));
    setSolvedQuestions([]);
  };

  // 1️⃣ Initialize solvedHistory from localStorage
  const [solvedHistory, setSolvedHistory] = useState(() => {
    const stored = localStorage.getItem('solvedHistory');
    return stored ? JSON.parse(stored) : {};
  });


  // Toggle solved
  const toggleSolved = (id) => {
    const updated = solvedQuestions.includes(id)
      ? solvedQuestions.filter((q) => q !== id)
      : [...solvedQuestions, id];

    setSolvedQuestions(updated);

    // All solved
    if (dailyQuestions.length > 0 && updated.length === dailyQuestions.length) {
      setShowCelebration(true);

      const today = new Date().toLocaleDateString();

      // store actual solved questions with topic & difficulty
      setSolvedHistory(prev => {
        const todaySolved = prev[today] || [];

        // Add new solved questions, allow duplicates to count multiple solves
        const newSolved = [
          ...todaySolved,
          ...dailyQuestions.map(q => ({
            id: q.id,
            topic: selectedTopic,
            difficulty: selectedDifficulty
          }))
        ];

        const updatedHistory = { ...prev, [today]: newSolved };
        localStorage.setItem('solvedHistory', JSON.stringify(updatedHistory));
        return updatedHistory;
      });


      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
        }, i * 500);
      }

      setTimeout(() => setShowCelebration(false), 4000);
    }
  };

  // Tracker Page
  if (view === "tracker") {
    return <TrackerPage
      solvedHistory={solvedHistory}
      setView={setView}
    />;
  }

  return (
    <div className="App">
      <div className="date-corner">{todayDate}</div>
      <h1>Daily DSA Challenge</h1>
      <div className="motivation">
        {motivationalLines[Math.floor(Math.random() * motivationalLines.length)]}
      </div>

      <div className="selectors">
        <TopicSelector
          topics={topics}
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
        />
        <div className="difficulty-selector">
          <label htmlFor="difficulty">Select Difficulty:</label>
          <select
            id="difficulty"
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
          >
            <option value="">--Choose Difficulty--</option>
            {difficulties.map((diff) => (
              <option key={diff} value={diff}>{diff}</option>
            ))}
          </select>
        </div>
        <button className="show-questions-btn" onClick={getQuestions}>
          Show Questions
        </button>
      </div>

      <div className="questions-list">
        {dailyQuestions.map((q) => (
          <QuestionCard
            key={q.id}
            question={q}
            solved={solvedQuestions.includes(q.id)}
            toggleSolved={toggleSolved}
          />
        ))}
      </div>

      {/* Only Tracker button, styled */}
      <div className="nav-buttons">
        <button className="tracker-btn" onClick={() => setView("tracker")}>
          📊 Track My Progress
        </button>
      </div>

      {showCelebration && (
        <div className="celebration-overlay">
          <div className="celebration-popup">🎉 Hurray! You did it! 🎉</div>
        </div>
      )}
    </div>
  );
}

export default App;
