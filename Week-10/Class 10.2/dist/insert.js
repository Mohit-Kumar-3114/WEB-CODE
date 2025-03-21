"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(username, password, firstName, lastName, email) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                username,
                password,
                firstName,
                lastName,
                email
            }
        });
        console.log(res);
    });
}
insertUser("admin2", "12345346", "harkiiirat", "siniigh", "harkirat@gmail.com");
insertUser("admin1", "162345346", "mohit", "ahlawat", "mohit@gmail.com");
// In the context of Prisma, autogenerated clients refer specifically to the client libraries that are automatically 
// generated by Prisma Client based on your Prisma schema. Prisma is an ORM (Object-Relational Mapping) tool for
// Node.js and TypeScript, which simplifies database access by providing a type-safe and auto-generated query
// builder. When you define your data model using Prisma schema language, Prisma generates a client library tailored
// to that schema. 
// Autogenerated clients typically include functions for CRUD operations (Create, Read, Update, Delete) as well as
// advanced querying capabilities specific to your data model. They ensure that your code adheres to the defined
// schema, reducing the likelihood of runtime errors related to database interactions.
