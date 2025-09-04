import React from "react";

const preferences = ["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free", "Keto"];

const PreferencesFilter = ({ selectedPreferences, setSelectedPreferences }) => {
  const togglePreference = (pref) => {
    if (selectedPreferences.includes(pref)) {
      setSelectedPreferences(selectedPreferences.filter((p) => p !== pref));
    } else {
      setSelectedPreferences([...selectedPreferences, pref]);
    }
  };

  return (
    <div className="filter-section">
      <h3>Preferences</h3>
      {preferences.map((pref, index) => (
        <label key={index} style={{ display: "block" }}>
          <input
            type="checkbox"
            checked={selectedPreferences.includes(pref)}
            onChange={() => togglePreference(pref)}
          />
          {pref}
        </label>
      ))}
    </div>
  );
};

export default PreferencesFilter;
