"use strict";
// UGLY WAY OF CREATING OBJECTS
// interface a {
//     id: number;
//     name: string;
//   }
//   type Users = { [key: string]: a };
//   const users: Users = {
//     'abc123': { id: 1, name: 'John Doe' },
//     'xyz789': { id: 2, name: 'Jane Doe' },
//   };
const users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};
console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }
// Initialize an empty Map
const usersMap = new Map();
// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }
