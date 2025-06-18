# First React App

## Component

- component = function
  - function will return JSX
  - JSX (JavaScript XML) is a syntax that looks similar to HTML but is actually an extension of JavaScript.
- main component = App()
- name should using PascalCase

## state

- 用於更新 user interface 的內容
- setup states at the top of the component
- `useState` is a hook that allows you to add state to functional components
- `useState` returns an array with two elements: the current state and a function to update it
- `initialState` can be a primitive value, an object, or an array

```js
const [state, setState] = useState(initialState);
```

## effect

- 第一個參數 function
  - 想要在 component 被 Mount 時，執行的 function
- 第二個參數 dependency array
  - Empty array means this effect runs only once when the component mounts
- It is similar to componentDidMount in class components (todo: research componentDidMount)

```js
import { useEffect } from "react";

export default function App() {

  useEffect(function () {
    console.log("Component mounted");

    // Return a cleanup function that will run when the component unmounts
    return () => {
      console.log("Cleanup function");
    };
  }, []);

  return <div>Hello, World!</div>;
}
```

## props

- 用於傳遞資料到子 component
- `props` is an object that contains the properties passed to the component

```js
function ParentComponent() {
  return <ChildComponent name="John" />;
}

function ChildComponent(props) {
  return <div>{props.name}</div>;
}
```
