import { useEffect, useState } from "react";
import { useMemo } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = useMemo(()=>{
    console.log("memo code rerender")
    let sum=0
  for (let i = 1; i <= inputValue; i++) {
    sum = sum + i;
  } return sum
  }, [inputValue]);
  

  return <div>
    <input onChange={function(e) {
      setInputValue(e.target.value);
    }} placeholder={"Find sum from 1 to n"}></input>
    <br />
    Sum from 1 to {inputValue} is {count}
    <br />
    <button onClick={() => {
      setCounter(counter + 1);
    }}>Counter ({counter})</button>
  </div>
}

export default App;

// useMemo is a React Hook that is used to memoize the result of a computation, preventing unnecessary 
// recalculations when the component re-renders. It takes a function and an array of dependencies. The memoized 
// function will only be recomputed when the values in the dependencies array change.

// let count = useEffect(()=>{
// let sum=0
// for (let i = 1; i <= inputValue; i++) {
//   sum = sum + i;
// } return sum
// }, []);
// 

// The code you wrote won't work as expected because useEffect doesn't return values like functions such as useMemo 
// or useState do. Instead, useEffect is designed to run side effects, such as making API calls, updating the DOM, 
// or manipulating state, after a component renders. It cannot return a value like sum.

