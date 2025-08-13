// PROP-DRILLING IN REACT

import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <Count count={count} setCount={setCount} />
    </div>
  )
}

function Count({count,setCount}) {
  return <div>
    {count}
    <Buttons count={count} setCount={setCount}/>
  </div>
}

function Buttons({count,setCount}) {
  return <div>
    <button onClick={() => {
     setCount(count+1)
    }}>Increase</button>

    <button onClick={() => {
     setCount(count-1)
    }}>Decrease</button>
  </div>
}

export default App


// Prop drilling means passing data from a parent component to a deeply nested child component by sending it through
// multiple intermediate components that don’t actually need the data — they just pass it along. The main problem 
// is that components that don’t even use the data may still re-render when props change.