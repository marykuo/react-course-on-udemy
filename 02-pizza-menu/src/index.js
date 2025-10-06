import React from "react";
import ReactDOM from "react-dom/client";

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
  return (
    <header>
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <menu>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
    </menu>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/focaccia.jpg" alt="Focaccia" />
      <h3>Focaccia</h3>
      <p>Bread with italian olive oil and rosemary</p>
    </div>
  );
}

function Footer() {
  return <footer>We're currently open!</footer>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
