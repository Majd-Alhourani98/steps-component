import { useState } from "react";

const messages = ["Learn React *", "Apply for job", "Invest your new income"];

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
    </div>
  );
}

function Steps() {
  const [step, seStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) seStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      seStep((s) => s + 1);
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">Step: {messages[step - 1]}</p>

          <div className="buttons">
            <Button
              onClick={handlePrevious}
              bgColor={"#7950f2"}
              textColor={"#fff"}
              text="Previous"
            />

            <Button
              onClick={handleNext}
              bgColor={"#7950f2"}
              textColor={"#fff"}
              text="Next"
            />
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textColor, bgColor, onClick, text }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
