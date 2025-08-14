import React, { useState, useEffect } from 'react';

const App = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    // set a timeout when name changes
  let timerId=setTimeout(() => {
        console.log(`You have searched for ${name}`);
    }, 600);

    // cleanup function to clear timeout on next name change
    return () => {
      clearTimeout(timerId);
    };
  }, [name]);

  return (
    <div>
      <input
        type="text"
        placeholder="What do you want to search?"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default App;


// Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, making them 
// more efficient. When a user types quickly, a debouncing mechanism introduces a delay before the associated event
// or function is triggered. This delay allows time for the user to finish typing or resizing without triggering the 
// event multiple times.
