import React, { useState, useCallback, memo } from 'react';


const Parent = () => {
  const [count, setCount] = useState(0);

  
  const handleClick = useCallback(() => {
    console.log('Button clicked!');
  },[])


  return (
    <div>
      <button onClick={()=>setCount(count+1)}>increase count</button>
      <p>Count: {count}</p>
      <Child handleClick={handleClick} />
    </div>
  );
};

const Child = memo(({handleClick}) => { // memo is needed to prevent child re-rendering
  console.log('ChildComponent rendering...');
  return <button onClick={handleClick}>click me</button>;
});


export default Parent;

// The useCallback hook in React is used to memoize functions, preventing unnecessary re-creation of functions on 
// each render. 

// If you didn’t use useCallback, the handleClick function would be re-created on every render. Every time the 
// Parent component renders (for example, when the count state changes), a new instance of handleClick is 
// created in memory. Even though the logic of the function doesn't change, its reference is different, meaning it 
// is not referentially equal to the previous handleClick. If you passed this newly created handleClick function as 
// a prop to Child, React would see the function as a new prop (because the reference changed), so it would 
// re-render the child.

// With useCallback: By wrapping handleClick in useCallback, you ensure that the reference to handleClick stays the 
// same across renders, as long as the dependencies don't change (in this case, the dependency array is empty, so it 
// never changes). This means handleClick will have the same reference every time Parent re-renders, and 
// React will not consider it a new prop for Child.