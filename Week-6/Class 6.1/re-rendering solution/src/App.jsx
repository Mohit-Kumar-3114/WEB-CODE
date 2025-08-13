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

// Pushing state down in React means keeping state in the lowest component that actually needs it. When state is 
// kept at a higher level in the component tree, any changes to that state can trigger re-renders for all child 
// components, even if they don't directly use that state. However, by pushing the state down to the components 
// that actually need it, you can minimize unnecessary re-renders beacuse only the components that use the state
// will re-render when that state changes. 