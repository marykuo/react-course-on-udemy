import { useState } from "react";

const messages = [
  "Learn React",
  "Build a React App",
  "Get a beautiful website",
];

export default function App() {
  const style = { backgroundColor: "#7950f2", color: "#fff" };
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  async function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  async function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((open) => !open)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button style={style} onClick={handlePrevious}>
              Previous
            </button>
            <button style={style} onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
