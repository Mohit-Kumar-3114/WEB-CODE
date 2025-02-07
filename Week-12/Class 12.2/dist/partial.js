"use strict";
function updateUser(user) {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
}
updateUser({ name: "harsh", email: "harsh@gmail.com" });
// Partial makes all properties of a type or an interface optional, creating a type with the same properties, but 
// each marked as optional.
