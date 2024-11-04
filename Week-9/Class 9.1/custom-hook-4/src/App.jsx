// TIMER BASED CUSTOM HOOK
import { useEffect, useState } from 'react';

// A hook that runs a certain callback function every n seconds.
function useInterval(callback, delay) {
  useEffect(() => {
    const intervalId = setInterval(callback, delay);
    return () => clearInterval(intervalId);
  }, [callback, delay]);
}

function App() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  }, 1000);

  return (
    <>
      Timer is at {count}
    </>
  );
}
export default App;
