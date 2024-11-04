import { useState } from "react"
let GLOBAL_ID = 4;
function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "Go to gym",
    description: "Need to hit the gym from 7-9PM"
  }, {
    id: 2,
    title: "Go to Clas",
    description: "Need to go to the class from 4-7 PM"
  }, {
    id: 3,
    title: "Eat foor",
    description: "Need to eat food from 2-4 PM"
  }])

  function addTodo() {
    setTodos([...todos, {
      id: GLOBAL_ID++,
      title: "new todo",
      description: "new todo desc"
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
      {/* {todos.map((todo) => <Todo title={todo.title} description={todo.description} />)} */}
    </div>
  )
}

function Todo({title, description}) {
  return <div>
    <h1>
      {title}
    </h1>
    <h4>
      {description}
    </h4>
  </div>
}

export default App

// React uses the Virtual DOM to optimize rendering. When changes occur, React compares the new Virtual DOM with the 
// previous one to determine the minimal updates needed. The key helps React efficiently identify which items have
// changed, been added, or removed.

// 1. Without key: React has to compare each element one-by-one to find changes, which can be inefficient.
// 2. With key: React can directly track and update only the changed elements because each item has a unique key.