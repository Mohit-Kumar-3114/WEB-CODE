// LIFECYLCE EVENTS USING FUNCTIONAL COMPONENTS

import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setRender(r=>!r); // har 10 second k bad render ki value opposite hoti rhegi
    }, 10000)
  }, []);

  return (
    <>
      {render ? <MyComponent /> : <div></div>}
    </>
  )
}

function MyComponent() {
  useEffect(() => {
    console.error("component mounted");
    return () => {
      console.log("component unmounted");
    };
  }, []);

  return <div>
    From inside my component
  </div>
}




// LIFECYLCE EVENTS USING CLASS COMPONENTS
// class MyComponent extends React.Component {
//   componentDidMount() {
//     console.error("component mounted");
//   }

//   componentWillUnmount() {
//     console.error("component unmounted");
//   }

//   render() {
//    return <div>
//      hi harsh 
//   </div>
//   }
// }

export default App

// Jab ye code run hoga sabse phle console pr component mounted print hoga uske 10 second baad component unmounted
// print hoga kyunki dependancy array empty h. Pr agar dependancy array m koi state variable hoga to sabse phle 
// component mounted print hoga uske bad agr state variable change hua to phle component unmounted print hoga fir 
// component mounted print hoga or ye loop chalta rhega jab jab state variable change hoga dependancy array ka. 

// In React, lifecycle events are phases that a component goes through during its existence, from creation to 
// removal. These events include actions like initializing, rendering, updating, and cleaning up. In class components
// these events are represented by methods like `componentDidMount` (called after rendering) or 
// `componentWillUnmount` (called before removal). With functional components, React Hooks, specifically `useEffect`,
// are used to handle similar tasks in a more concise and flexible manner. Lifecycle events help developers manage 
// the behavior of components throughout their lifecycle in a React application.

// The primary use of the return function in useEffect is to clean up any resources or side effects that were set up
// during the execution of the useEffect function. This can include actions like removing event listeners,
// unsubscribing from subscriptions, clearing timers, or any other tasks necessary to prevent memory leaks or
// unexpected behavior when the component is no longer in use.