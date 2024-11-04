import React, { useState , useEffect} from 'react';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up the timer if the value changes before the delay has passed
    return () => clearTimeout(timerId);
  }, [value, delay]);

  return debouncedValue;
};


const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 2000);
  
  return (
    <>
    Debounced value is {debouncedValue}
    <input type="text"  onChange={(e) => setInputValue(e.target.value)} placeholder="Search..."/>
    </>
  
  );
};

export default SearchBar;

// Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, making them 
// more efficient. When a user types quickly, a debouncing mechanism introduces a delay before the associated event
// or function is triggered. This delay allows time for the user to finish typing or resizing without triggering the 
// event multiple times.
