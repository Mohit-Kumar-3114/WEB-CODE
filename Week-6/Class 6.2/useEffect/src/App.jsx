import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [selectedId, setSelectedId] = useState(1);

  return <div>
    <button onClick={() => setSelectedId(1)}>1</button>
    <button onClick={() => setSelectedId(2)}>2</button>
    <button onClick={() => setSelectedId(3)}>3</button>
    <Todo id={selectedId} />
  </div>
}

function Todo({id}) {
  const [todo, setTodo] = useState({});
  useEffect(() => {
    console.log("fetch code rerender")
    fetch(`https://sum-server.100xdevs.com/todos`)
    .then( function(res) {
    return res.json();
    }).then(function(ans){
      setTodo(ans.todo)
    })
  }, [id])

  return <div>
    Id: {id}
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;

// The useState hook is used to declare state variables in a functional component. It returns an array with two 
// elements: the current state value and a function that allows you to update that state.


// useEffect is another important React hook that allows you to perform side effects in your functional components. 
// Side effects in React typically include data fetching, subscriptions, or manually changing the DOM. The useEffect
// hook is a replacement for lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount 
// in class components. The useEffect hook takes a function as its first argument. This function contains the code 
// that should be executed as a side effect. The second argument of useEffect is an array of dependencies. If any of 
// the dependencies change between renders, the effect function will run again. If the array is empty ([]), the 
// effect runs once after the initial render.
