"use strict";
// const displayUserProfile = (user: UserProfile) => {
//     console.log(`Name: ${user.name}, Email: ${user.email}`);
// };
const displayUserProfile = ({ name, email }) => {
    console.log(`Name: ${name}, Email: ${email}`);
};
displayUserProfile({ name: "mohit", email: "mohit@gmail.com" });
// Pick allows you to create a new type by selecting a set of properties (Keys) from an existing type or interface.