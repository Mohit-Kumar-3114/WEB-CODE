import { useState , useRef} from 'react'

function App() {
  const [count, setCount] = useState(0);
  let a=10;
  let b=useRef(10);

    a=a+1;
    b.current=b.current+1
    console.log(`value of a=${a} and value of b=${b.current}`)
 
  return (
    <>
    <button onClick={()=>setCount(count+1)}>count={count}</button>
    </>
  )
}

export default App

// a is a normal variable. Every time the component re-renders (like when count changes), a is reset to 10 and then
// incremented to 11. So it does not persist between renders. 

// b is a useRef object. Its .current property persists across renders. Every time the component re-renders, 
// b.current keeps its previous value, so it increments every time you click the button.