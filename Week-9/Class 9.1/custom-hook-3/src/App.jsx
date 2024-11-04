// BROWSER FUNCTIONALITY RELATED HOOKS 
import { useEffect, useState } from 'react'
// A hook that returns you the current mouse pointer position
const useMousePointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
// The cleanup function removes the event listener added earlier, ensuring that there are no lingering event 
// listeners after the component is unmounted.
    return () => {
      window.removeEventListener('mousemove', handleMouseMove); 
    };
  }, []);

  return position;
};

function App() {
  const mousePointer = useMousePointer();

  return (
    <>
      Your mouse position is {mousePointer.x} {mousePointer.y}
    </>
  )
}

export default App