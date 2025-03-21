// Function to create a users table in your database
import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://postgres:10.1@localhost:5432/postgres?sslmode=disable" 
  // mysecretpassword ki jgah agr koi password dala h to vo dal denge baki connection string yhi rhegi
})

async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users2 (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}

createUsersTable();