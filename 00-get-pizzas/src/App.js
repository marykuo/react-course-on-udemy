import { useEffect, useState } from "react";

export default function App() {
  const [pizza, setPizza] = useState("");
  const [pieces, setPieces] = useState(0);

  async function getPizza() {
    const res = await fetch("https://quickpizza.grafana.com/api/names");
    const data = await res.json();
    console.log(data.names);

    const randomIndex = Math.floor(Math.random() * data.names.length);
    console.log(randomIndex);
    setPizza(data.names[randomIndex]);
    setPieces(pieces + 1);
  }

  useEffect(function () {
    getPizza();
  }, []);

  return (
    <div>
      <h1>App() function will return JSX</h1>
      <h4>Pizza name: {pizza}</h4>
      <button onClick={getPizza}>Get pizza</button>

      {/* print message straight in the component */}

      <p>
        You have get <strong>{pieces}</strong> pieces of pizza!
      </p>

      {/* print message using a separate component with props */}

      <Message pieces={pieces} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have get <strong>{props.pieces}</strong> pieces of pizza!
    </p>
  );
}
