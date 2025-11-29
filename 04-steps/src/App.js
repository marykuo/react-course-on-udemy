export default function App() {
  const style = { backgroundColor: "#7950f2", color: "#fff" };

  return (
    <div className="steps">
      <div className="numbers">
        <div className="active">1</div>
        <div>2</div>
        <div>3</div>
      </div>

      <p className="message">Hello</p>

      <div className="buttons">
        <button style={style}>Previous</button>
        <button style={style}>Next</button>
      </div>
    </div>
  );
}
