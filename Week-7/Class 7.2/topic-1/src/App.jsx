import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     <div>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <App2 count={count} />
     </div>
    </>
  )
}

function App2({count}) {
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default App

// App is a stateful component that manages a count state. A stateful component is a component that manages its own 
// state using something like useState or useReducer. 

// App2 is a stateless component that receives the count as a prop and displays it. A stateless component does not 
// manage any state — it just receives data via props and displays it.