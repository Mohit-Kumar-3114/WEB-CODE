import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string, email : string) {
  const res = await prisma.user.create({
    data: { 
        username,
        password,
        firstName,
        lastName,
        email
    }
  })
  console.log(res);
}

insertUser("admin2", "12345346", "harkiiirat", "siniigh","harkirat@gmail.com")
insertUser("admin1", "162345346", "mohit", "ahlawat","mohit@gmail.com")

// In the context of Prisma, autogenerated clients refer specifically to the client libraries that are automatically 
// generated by Prisma Client based on your Prisma schema. Prisma is an ORM (Object-Relational Mapping) tool for
// Node.js and TypeScript, which simplifies database access by providing a type-safe and auto-generated query
// builder. When you define your data model using Prisma schema language, Prisma generates a client library tailored
// to that schema. 

// Autogenerated clients typically include functions for CRUD operations (Create, Read, Update, Delete) as well as
// advanced querying capabilities specific to your data model. They ensure that your code adheres to the defined
// schema, reducing the likelihood of runtime errors related to database interactions.