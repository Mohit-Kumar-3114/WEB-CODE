function App() {
  return (
    <div>
      <Header title="my name is harkirat" />
      <Header title="My name is raman" />
    </div>



// It will show error as we can return only a single top level xml
  //    <div>
  //    <Header title="my name is harkirat" />
  //    <Header title="My name is raman" />
  //  </div>



// To remove extra div we can use
  //    <> or <React.Fragment>
  //    <Header title="my name is harkirat" />
  //    <Header title="My name is raman" />
  //    </> or </React.Fragment>

  )
}

function Header({title}) {
  return <div>
    {title}
  </div>
}

export default App

// In React, a component can only return a single root element, commonly wrapped in a parent container (like a div).
// This rule exists because React needs a single entry point to render and manage the component's output.

// One of the most prominent reasons for it is Reconciliation. The single-root element rule in React facilitates the
// reconciliation process, where React efficiently updates the real DOM based on changes in the virtual DOM. By 
// having a single root element, React can easily perform the comparison between the previous and current states of 
// the virtual DOM.

// While a single root element is required, React provides a feature called fragments (<></> or <React.Fragment>
// </React.Fragment>) that allows you to group multiple elements without introducing an extra node in the real DOM. 
// Fragments don't create an additional parent in the DOM but still satisfy the single-root rule.