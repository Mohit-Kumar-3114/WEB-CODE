// BROWSER FUNCTIONALITY RELATED HOOKS 
import { useEffect, useState } from 'react'

// A hook that returns true or false based on weather the user is currently online
function useIsOnline() {
// window.navigator.onLine returns true or false based on the user is online  
  const [isOnline, setIsOnline] = useState(window.navigator.onLine); 

  useEffect(() => {
    window.addEventListener('online', () => setIsOnline(true));
    window.addEventListener('offline', () => setIsOnline(false));

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [])

  return isOnline;
}

function App() {
  const isOnline = useIsOnline(5);

  return (
    <>
      {isOnline ? "You are online yay!" : "You are not online"}
    </>
  )
}

export default App