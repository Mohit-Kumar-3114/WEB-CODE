"use strict";
const handleEvent = (event) => {
    console.log(`Handling event: ${event}`);
};
handleEvent("click"); // OK
// handleEvent("scroll") shows error as it is excluded
// In a function that can accept several types of inputs but you want to exclude specific types from being passed to
// it.
