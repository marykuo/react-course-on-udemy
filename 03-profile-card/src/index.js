import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
  return <img className="avatar" src="profile.png" alt="profile" />;
}

function Intro() {
  return (
    <div>
      <h1>Mary Kuo</h1>
      <p>I am a Java Engineer. Now service at GateWeb Information Co., Ltd.</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="Java" emoji="💪" color="Orange" />
      <Skill name="Spring Boot" emoji="💪" color="Orange" />
      <Skill name="JavaScript" emoji="👶" color="Lime" />
      <Skill name="React" emoji="👶" color="Lime" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
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
