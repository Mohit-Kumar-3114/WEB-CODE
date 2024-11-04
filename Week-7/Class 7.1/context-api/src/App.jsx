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


// The Context API is a feature in React that provides a way to share values (such as state or functions) between 
// components without explicitly passing props through each level of the component tree. It allows you to create a 
// global state that can be accessed by any component within the tree, regardless of how deep they are nested. This 
// is particularly useful for avoiding prop drilling in large component hierarchies.The Provider is responsible for 
// making the provided data accessible to all the components that have access to that context. 

// In React, the createContext function allows you to create a centralized container, or context, for sharing 
// specific data across components. This context can hold a default value and serves as a medium for components to 
// access shared information without the need for passing it down through props. The useContext hook is then 
// employed within functional components to consume the data from this context.

// Although Child function does not take count variable as a prop but still it will re-render whenever the count 
// changes. This is the disadvantage of context api which is solved by state management.