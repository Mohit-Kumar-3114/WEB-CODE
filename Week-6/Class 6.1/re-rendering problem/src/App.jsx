import { useState } from "react"

function App() {
  const [firstTitle, setFirstTitle] = useState("my name is mohit");

  function changeTitle() {
    setFirstTitle("My name is " + Math.random())
  }

  return (
    <div>
      <button onClick={changeTitle}>Click me to change the title</button>
      <br></br><br></br>
      <Header title={firstTitle} />
      <br></br>
      <Header title="My name is raman" />
    </div>
  )
}

function Header({title}) {
  return <div>
    {title}
  </div>
}


export default App

// The problem is that when we click on button our both header get re-render but we do not want to re-render our 
// second header as it is static so we will minimise the re-rendering.