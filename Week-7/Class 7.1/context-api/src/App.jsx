import { useContext, useState } from "react";
import { CountContext } from "./context";

/*
         Parent
           ||
    ==== Child ====     
    ||            ||
GrandChild1    GrandChild2

*/

function Parent() {
  const [count, setCount] = useState(0);

  // Pass both count and setCount via context
  return (
    <div> 
      <CountContext.Provider value={{ count, setCount }}> 
          <Child />
      </CountContext.Provider>
    </div>
  );
}

function Child() {
  console.log("re-render happening");
  return (
    <div>
      <GrandChild1 />
      <GrandChild2 />
    </div>
  );
}

function GrandChild1() {
  const { count } = useContext(CountContext); // Retrieve count from context
  return <div>{count}</div>;
}

function GrandChild2() {
  const { count, setCount } = useContext(CountContext); // Retrieve both count and setCount

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default Parent;


// The Context API in React is a built-in feature that allows you to share data across multiple components without 
// passing props manually through each level (avoiding prop drilling).
// It works by:
// 1. Creating a context with createContext().
// 2. Providing the data using a Provider component.
// 3. Consuming the data in child components with useContext().