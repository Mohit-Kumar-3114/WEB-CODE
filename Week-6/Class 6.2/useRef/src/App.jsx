import { useEffect, useRef } from 'react'

function App() {
  // Ugly way of writin the code
  // const incomeTax = 20000;
 
  // useEffect(() => {
  //   setTimeout(() => {
  //    document.getElementById("it").innerHTML=10;
  //   }, 5000);
  // }, [])

  // return (
  //   <div>
  //       hi there, your income tax returns are <div id="it">{incomeTax}</div>
  //   </div>
  // )


// Cleaner way to write the code using useRef
const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = "10"
    }, 5000);
  }, [])

  const incomeTax = 20000;

  return <div>
        hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  
}

export default App

// useRef is a hook that allows you to directly access a DOM element without using the methods like 
// document.getElementById. It is more efficient and cleaner than using the traditional methods of accessing DOM 
// elements.