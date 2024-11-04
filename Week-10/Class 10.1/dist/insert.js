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
// Function to insert data into a table
const pg_1 = require("pg");
// Less secure way to insert data as it cause sql injection
function insertData(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://postgres:10.1@localhost:5432/postgres?sslmode=disable"
        });
        try {
            yield client.connect();
            // This is vulnerable to SQL injection if username is not sanitized
            const insertQuery = `INSERT INTO users2 (username, email, password) VALUES ('${username}', 'user32@example.com', 'user_password');`;
            const res = yield client.query(insertQuery);
            console.log('Insertion success:', res);
        }
        catch (err) {
            console.error('Error during the insertion:', err);
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
// Simulating SQL Injection:
insertData(";DELETE FROM users2;");
// More secure way to insert data 
// async function insertData(username:string,email: string,password: string) {
//     const client = new Client({
//       connectionString: "postgresql://postgres:10.1@localhost:5432/postgres?sslmode=disable" 
//     });
//     try {
//       await client.connect(); // Ensure client connection is established
//       // Use parameterized query to prevent SQL injection
//       const insertQuery = "INSERT INTO users2 (username, email, password) VALUES ($1, $2, $3)";
//       const values = [username,email,password]
//       const res = await client.query(insertQuery, values);
//       console.log('Insertion success:', res); // Output insertion result
//     } catch (err) {
//       console.error('Error during the insertion:', err);
//     } finally {
//       await client.end(); // Close the client connection
//     }
//   }
// insertData("harsh","harsh@gmail.com","harshop1234");
// In this modified version, the SQL query uses placeholders ($1, $2, $3) for the values to be inserted. The actual
// values are provided separately as an array (values). Using parameterized queries ensures that user input is
// treated as data rather than executable SQL code, effectively preventing SQL injection attacks.
// SQL injection is like a hacker sneaking malicious commands into places where they shouldn't be. Imagine a website 
// that asks for your username and password. If the website isn't careful, a hacker could type something tricky into
// the username field that confuses the website's database and lets the hacker do things they shouldn't be able to
// do, like seeing other users' passwords or even deleting data from the website's database. It's a way for hackers
// to break into websites and mess things up.
