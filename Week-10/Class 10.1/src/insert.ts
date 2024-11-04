// Function to insert data into a table
import { Client } from 'pg';

// Less secure way to insert data as it cause sql injection
// async function insertData() {
//   const client = new Client({
//     connectionString: "postgresql://postgres:10.1@localhost:5432/postgres?sslmode=disable" 
//   });

//   try {
//     await client.connect(); // Ensure client connection is established
//     const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
//     const res = await client.query(insertQuery);
//     console.log('Insertion success:', res); // Output insertion result
//   } catch (err) {
//     console.error('Error during the insertion:', err);
//   } finally {
//     await client.end(); // Close the client connection
//   }
// }
// insertData();




// More secure way to insert data 
async function insertData(username:string,email: string,password: string) {
    const client = new Client({
      connectionString: "postgresql://postgres:10.1@localhost:5432/postgres?sslmode=disable" 
    });
  
    try {
      await client.connect(); // Ensure client connection is established
  
      // Use parameterized query to prevent SQL injection
      const insertQuery = "INSERT INTO users2 (username, email, password) VALUES ($1, $2, $3)";
      const values = [username,email,password]
      const res = await client.query(insertQuery, values);
      console.log('Insertion success:', res); // Output insertion result
    } catch (err) {
      console.error('Error during the insertion:', err);
    } finally {
      await client.end(); // Close the client connection
    }
  }
  
  insertData("harsh","harsh@gmail.com","harshop1234");

// In this modified version, the SQL query uses placeholders ($1, $2, $3) for the values to be inserted. The actual
// values are provided separately as an array (values). Using parameterized queries ensures that user input is
// treated as data rather than executable SQL code, effectively preventing SQL injection attacks.

// SQL injection is like a hacker sneaking malicious commands into places where they shouldn't be. Imagine a website 
// that asks for your username and password. If the website isn't careful, a hacker could type something tricky into
// the username field that confuses the website's database and lets the hacker do things they shouldn't be able to
// do, like seeing other users' passwords or even deleting data from the website's database. It's a way for hackers
// to break into websites and mess things up.