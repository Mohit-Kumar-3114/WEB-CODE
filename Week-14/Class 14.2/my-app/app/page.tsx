import axios from "axios";

async function getUserDetails() {
  await new Promise(resolve => setTimeout(resolve, 3000));
  const response = await axios.get("http://localhost:3000/api/user")
	return response.data;
}


// Next.js supports async components, which means we can directly export an async function as the default component.
// Not in react
export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData?.username}
                </div>
                Email:
                {userData?.email}
            </div>
        </div>
    </div>
  );
}

// If you start the development server (npm run dev) and visit http://localhost:3000, you should see the user's 
// email and name rendered on the page. Additionally, if you open the browser's network tab, you should not see any
// waterfalling effect, as the data is fetched and rendered on the server-side.

// In Next.js, you can define a loading.tsx file (or loading.jsX for JavaScript) in the same directory as your page
// component. This file will be used to render a loading state while the page's async operations, such as data
// fetching, are in progress.
