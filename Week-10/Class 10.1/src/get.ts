// Function to fetch user data from the database given an email
import { Client } from 'pg';

async function getUser(email: string) {
    const client = new Client({
      connectionString:"postgresql://postgres:10.1@localhost:5432/postgres?sslmode=disable"
    });
    

  try {
    await client.connect(); // Ensure client connection is established
    const query = 'SELECT * FROM users2 WHERE email = $1';
    const values = [email];
    const result = await client.query(query, values);
    
    if (result.rows.length > 0) {
      console.log('User found:', result.rows[0]); // Output user data
      return result.rows[0]; // Return the user data
    } else {
      console.log('No user found with the given email.');
      return null; // Return null if no user was found
    }
  } catch (err) {
    console.error('Error during fetching user:', err);
    throw err; // Rethrow or handle error appropriately
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
getUser('harsh@gmail.com')