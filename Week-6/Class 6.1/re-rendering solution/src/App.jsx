import { useState } from "react"

function App() {
  return (
    <div>
      <HeaderWithButton />
      <Header title="My name is raman" />
    </div>
  )
}

function HeaderWithButton() {
  const [firstTitle, setFirstTitle] = useState("my name is harkirat");

  function changeTitle() {
    setFirstTitle("My name is " + Math.random())
  }

  return <>
    <button onClick={changeTitle}>Click me to change the title</button>
    <Header title={firstTitle} />
  </>
}

function Header({title}) {
  return <div>
    {title}
  </div>
}

export default App

// Pushing the state down in React refers to the practice of managing state at the lowest possible level in the 
// component tree. By doing so, you localize the state to the components that absolutely need it, reducing 
// unnecessary re-renders in higher-level components.
 
// When state is kept at a higher level in the component tree, any changes to that state can trigger re-renders for 
// all child components, even if they don't directly use or depend on that particular piece of state. However, by 
// pushing the state down and ensuring that each component only has access to the state it needs, you can minimize 
// the impact of state changes on the overall component tree.