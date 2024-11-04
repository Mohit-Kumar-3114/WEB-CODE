"use client"
export default function Signin() {
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            Sign in
                        </div>
                    </div>
                    <div className="pt-2">
                        <LabelledInput label="Username" placeholder="harkirat@gmail.com" />
                        <LabelledInput label="Password" type={"password"} placeholder="123456" />
                        <button onClick={() => {
                        console.log("User clicked on signin")
                        }} type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign in</button>

                    </div>
                </div>
            </a>
        </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
}

function LabelledInput({ label, placeholder, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}

// NextJS expects you to identify all your components as either client or server. As the name suggests, Server 
// components are rendered on the server and Client components are pushed to the client to be rendered. By default, 
// all components are server components. If you want to mark a component as a client component, you need to add the
// following to the top of the component - "use client". 
 
// When should you create client components?
// Whenever you get an error that tells you that you need to create a client component.
// Whenever you’re using something that the server doesn’t understand (useEffect, useState, onClick…).

// Here's what's happening behind the scenes:
// 1. Server-Side Rendering (SSR): When you visit the /signin route, Next.js renders the Signin component on the 
// server-side, which includes executing the onClick handler and the console.log statement.
// 2. Server Environment: On the server-side, Node.js doesn't have access to the browser's console object, which is 
// a client-side API. This is why you see the error about the console object being deprecated.
// 3. Hydration: After the initial server-rendered HTML is sent to the browser, Next.js "hydrates" the application 
// by attaching event handlers and making it interactive on the client-side.
// 4. Client-Side Rendering: Once the application is hydrated on the client-side, the onClick handler and the 
// console.log statement will work as expecte, as the browser environment has access to the console object.