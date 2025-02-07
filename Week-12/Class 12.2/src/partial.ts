type User2 ={
    id: number;
    name: string;
    age: number;
    email: string;
    password: string;
};

type UpdatePropsOptional = Partial<User2>

function updateUser(user: UpdatePropsOptional) {
console.log(`Name: ${user.name}, Email: ${user.email}`);
}

updateUser({name:"harsh",email:"harsh@gmail.com"})

// Partial makes all properties of a type or an interface optional, creating a type with the same properties, but 
// each marked as optional.