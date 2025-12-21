import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    sex: "",
    budget: "",
    location_pref: "",
    commute_pref: "",
    cleaning_freq: "",
    dishes: "",
    noise_bother: "",
    noise_time: "",
    study_hours: "",
    invite_people: ""
  });

  const [matches, setMatches] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/get_matches", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    setMatches(data.matches); // store backend results
  };

  return (
    <div style = {{ maxWidth: "600px", margin: "40px auto", fontFamily: "sans-serif" }}>
        <h2>Roommate Compatibility Finder</h2>

        <form onSubmit = {handleSubmit}>
            <input 
                name = "name"
                placeholder = "Your name"
                onChange = {handleChange}
                required/>
        <select name="sex" onChange={handleChange} required>
          <option value="">Gender</option>
          <option>Female</option>
          <option>Male</option>
        </select>
        <input 
            name = "Budget"
            type = "Number"
            placeholder="Budget"
            onChange={handleChange}/>
        <input
            name = "location_pref"
            placeholder="Location Preference"
          onChange={handleChange}
/>
        <input
          name="commute_pref"
          type="number"
          placeholder="Commute (1–5)"
          onChange={handleChange}
        />
        <input
          name="cleaning_freq"
          type="number"
          placeholder="Cleaning Frequency (1–5)"
          onChange={handleChange}
        />
        <input
          name="dishes"
          placeholder="Clean dishes? (Yes/No)"
          onChange={handleChange}
        />
        <input
          name="noise_bother"
          placeholder="Does noise bother you? (Yes/No)"
          onChange={handleChange}/>
        <input
          name="noise_time"
          placeholder="Noise time (e.g. 10pm)"
          onChange={handleChange}/>
        <input
          name="study_hours"
          type="number"
          placeholder="Study Hours"
          onChange={handleChange}/>
        <input
          name="invite_people"
          placeholder="Invite people? (Yes/No)"
          onChange={handleChange}/>
        <button type ="submit">Find Top Matches</button>
        </form>
    </div>
  )}