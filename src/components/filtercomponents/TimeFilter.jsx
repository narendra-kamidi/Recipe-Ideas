import React from "react";

const times = [
  { label: "Any Time", value: "" },
  { label: "Under 15 min", value: "15" },
  { label: "Under 30 min", value: "30" },
  { label: "Under 1 hour", value: "60" },
];

const TimeFilter = ({ selectedTime, setSelectedTime }) => {
  return (
    <div className="filter-section">
      <h3>Cooking Time</h3>
      <select
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
      >
        {times.map((time, index) => (
          <option key={index} value={time.value}>
            {time.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimeFilter;
