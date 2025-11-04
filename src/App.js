// -------------------------------------
// 🧩 Root Component (App.js)
// -------------------------------------
// Displays a 3-step progress tracker with messages,
// navigation buttons, and an open/close toggle.

import { useState } from "react";

// Step messages for each stage
const messages = ["Learn React *", "Apply for job", "Invest your new income"];

function App() {
  // Step navigation state
  const [step, setStep] = useState(1);

  // Panel visibility state
  const [isOpen, setIsOpen] = useState(true);

  // 🧭 Move one step backward, but never below 1
  function handlePrevious() {
    setStep((currentStep) => Math.max(currentStep - 1, 1));
  }

  // 🧭 Move one step forward, but never beyond 3
  function handleNext() {
    setStep((currentStep) => Math.min(currentStep + 1, 3));
  }

  return (
    <div>
      {/* 🧩 Toggle Button (closes or reopens the steps panel) */}
      <button className="close" onClick={() => setIsOpen((o) => !o)}>
        &times;
      </button>

      {/* 🧱 Conditionally render the steps content */}
      {isOpen && (
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
            <Button bgColor="#7950f1" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button bgColor="#7950f1" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default App;
