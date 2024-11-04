// DATA FETCHING HOOKS
import { useEffect, useState } from 'react'
import axios from 'axios'

function useTodos(n) {  // Custom hook useTodo
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const value = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos") // It will run after n seconds
        .then(res => {
          setTodos(res.data.todos);
          setLoading(false);
        })
    }, n * 1000)
  
    axios.get("https://sum-server.100xdevs.com/todos") // It is run for the first time when we open the page so that                                               
      .then(res => {                                   // screen not be empty for first n seconds
        setTodos(res.data.todos);
        setLoading(false);
      })

    return () => {
      clearInterval(value) 
    }
  }, [n])

  return {todos, loading}; // Show a loader when the data is not yet fetched from the backend
}

function App() {
  const {todos, loading} = useTodos(5);

  if (loading) {
    return <div> loading... </div>
  }

  return (
    <>
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App

// The use of clearInterval in this code is a best practice for cleaning up resources associated with intervals to 
// prevent memory leaks and unnecessary computations. It ensures that the timer is stopped when the component is no 
// longer actively rendering or when the n value changes, improving the overall efficiency of the component.

// Agr n ki value change hui to sabse phle vo pichli n k liye chle hue setInterval ko stop krega or is new value k 
// liye chlayega taaki unnecessary rendering na ho