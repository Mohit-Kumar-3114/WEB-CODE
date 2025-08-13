import { useState } from "react"
import { memo } from 'react';

function App() {
  const [firstTitle, setFirstTitle] = useState("my name is harkirat");

  function changeTitle() {
    setFirstTitle("My name is " + Math.random())
  }

  return (
    <div>
      <button onClick={changeTitle}>Click me to change the title</button>
      <Header title={firstTitle} />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
    </div>
  )
}

const Header = memo(({title}) => {
  return (
    <div>
    {title}
  </div>
)})


export default App

// React.memo is a higher-order component that memoizes a component, meaning it prevents the component from 
// re-rendering unless its props change.