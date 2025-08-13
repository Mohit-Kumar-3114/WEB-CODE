function App() {

  return (
    <div style={{display: "flex"}}>
      <Card title=" hi bro">
        photos source 
      </Card>
      <Card title = " hi bro 2">
          hello from the 2nd card
      </Card>
    </div>
  )
}

function Card({children,title}) {
  return <p style={{
    border: "1px solid black",
    padding: 10,
    margin: 10,
    color: "red"
  }}>
    {children}
    {title}
  </p>
}

export default App


// In React, wrapper components are used to group and apply common styles or functionality to multiple child 
// components.
// children is simply the content that you pass between the component’s opening and closing tags.