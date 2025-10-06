import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // example of inline style
  // const style = { color: "red", fontSize: "50px" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <menu className="menu">
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
    </menu>
  );
}

function Pizza() {
  return (
    <div className="pizza">
      <img src="pizzas/focaccia.jpg" alt="Focaccia" />
      <h3>Focaccia</h3>
      <p>Bread with italian olive oil and rosemary</p>
    </div>
  );
}

function Footer() {
  return <footer className="footer">We're currently open!</footer>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
