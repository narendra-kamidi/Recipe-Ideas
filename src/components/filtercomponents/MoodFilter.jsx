import React from "react";

const moods = ["Comfort Food", "Healthy", "Quick Snack", "Party", "Fancy"];

const MoodFilter = ({ selectedMood, setSelectedMood }) => {
  return (
    <div className="filter-section">
      <h3>Select Mood</h3>
      <select
        value={selectedMood}
        onChange={(e) => setSelectedMood(e.target.value)}
      >
        <option value="">All</option>
        {moods.map((mood, index) => (
          <option key={index} value={mood}>
            {mood}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MoodFilter;
