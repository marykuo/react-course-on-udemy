import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { introduction, skills } from "./data.js";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src={introduction.photoUrl} alt="profile" />;
}

function Intro() {
  return (
    <div>
      <h1>{introduction.name}</h1>
      <p>{introduction.about}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((item) => (
        <Skill name={item.skill} level={item.level} color={item.color} />
      ))}
    </div>
  );
}

function Skill({ name, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{name}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
