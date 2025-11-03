// -------------------------------------
// 🧩 Root Component (App.js)
// -------------------------------------
// Displays a 3-step progress tracker with messages and navigation buttons.

import React from "react";

// Array of step messages
// Each message corresponds to a specific step (1 → Learn React, 2 → Apply for job, etc.)
const messages = ["Learn React *", "Apply for job", "Invest your new income"];

function App() {
  function handlePrevious() {
    alert("Previous from a function handler");
  }

  function handleNext() {
    alert("Next from a function handler");
  }

  // 🧮 Current step number (temporary hardcoded value for now)
  // Later, we’ll manage this dynamically with useState().
  const step = 3;

  return (
    <div className="steps">
      {/* ------------------------------------
           Step Number Indicators (1 - 3)
           Each circle is highlighted if step >= its number
         ------------------------------------ */}
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      {/* ------------------------------------
           Step Message
           Dynamically display the message of the current step
         ------------------------------------ */}
      <p className="message">Step: {messages[step - 1]}</p>

      {/* ------------------------------------
           Navigation Buttons
           Static for now — will handle logic next with useState
         ------------------------------------ */}
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>

        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
