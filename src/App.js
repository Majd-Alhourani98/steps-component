// -------------------------------------
// 🧩 Root Component (App.js)
// -------------------------------------
// Displays a 3-step progress tracker with messages and navigation buttons.

import { useState } from "react";

// Step messages for each stage
const messages = ["Learn React *", "Apply for job", "Invest your new income"];

function App() {
  // 🪄 useState Hook
  // `step` = current step number
  // `setStep` = function to update the current step
  const [step, setStep] = useState(1);

  // 🧭 Move one step backward, but never below 1
  function handlePrevious() {
    // Option 1: classic conditional
    // if (step > 1) setStep(step - 1);

    // Option 2: cleaner boundary control
    setStep(Math.max(step - 1, 1));
  }

  // 🧭 Move one step forward, but never beyond 3
  function handleNext() {
    // Option 1: classic conditional
    // if (step < 3) setStep(step + 1);

    // Option 2: concise version using Math.min
    setStep(Math.min(step + 1, 3));
  }

  return (
    <div className="steps">
      {/* Step Indicators */}
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      {/* Step Message */}
      <p className="message">Step: {messages[step - 1]}</p>

      {/* Navigation Buttons */}
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
