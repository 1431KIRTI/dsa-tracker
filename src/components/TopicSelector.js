import React from 'react';

const TopicSelector = ({ topics, selectedTopic, setSelectedTopic }) => {
  return (
    <div className="topic-selector">
      <label htmlFor="topic">Select Topic:</label>
      <select
        id="topic"
        value={selectedTopic}
        onChange={(e) => setSelectedTopic(e.target.value)}
      >
        <option value="">--Choose Topic--</option>
        {topics.map((topic) => (
          <option key={topic} value={topic}>
            {topic}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TopicSelector;
