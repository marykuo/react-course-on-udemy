import { useState } from "react";
import questions from "./data.js";

export default function App() {
  return (
    <div>
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id === selectedId ? null : id);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <span>
            {question.id === selectedId ? question.answer : question.question}
          </span>
        </div>
      ))}
    </div>
  );
}
