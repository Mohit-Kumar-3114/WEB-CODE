import { useState, useRef } from "react";

 function ControlledInput() {
  const [name, setName] = useState("mohit");

  return (
    <div>
      <input  type="text"
        placeholder="Enter your name"
        value={name} 
        onChange={(e) => setName(e.target.value)}
      />
      <p>Name: {name}</p>
    </div>
  );
}

// ControlledInput is a controlled component. In Controlled components React controls the form data via state. The 
// input value comes from React state, and changes are handled via onChange.



function UncontrolledInput() {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert("Name: " + inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} /> 
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h2>Controlled Input</h2>
      <ControlledInput />
      <h2>Uncontrolled Input</h2>
      <UncontrolledInput />
    </div>
  );
}

// UncontrolledInput is an uncontrolled component. In Uncontrolled components the form data is handled by the DOM 
// itself. The input value is accessed directly from the DOM using a ref, and changes are not handled by React state. 