// LAZY LOADING IN REACT

import { Suspense, lazy } from 'react'
import './App.css'
import {BrowserRouter , Routes , Route, useNavigate} from "react-router-dom"
const Dashboard =lazy(()=>import('./components/dashboard')) 
const Landing=lazy(()=>import('./components/landing'))

function App() {
  
  return (
    <BrowserRouter>
      <div style={{background:"red"}}> 
        HI I AM CLIENT SIDE ROUTING
      </div>
      <br></br>
  
        <Appbar />
        <Routes>
            <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
            <Route path="/" element={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>
        </Routes>
  </BrowserRouter>
  )
}

function Appbar() { 
  const navigate = useNavigate();

  return <div>
      <div>
        <button onClick={() => {
          navigate("/");
        }}>Landing page</button>

        <button onClick={() => {
          navigate("/dashboard");
        }}>Dashboard</button>
      </div>
  </div>
}

export default App

// Lazy loading in React is a technique to improve performance by loading components only when they're needed, 
// rather than all at once. It’s done using `React.lazy()` to dynamically import components and `Suspense` to show a
// fallback UI (like a loader) while waiting for the component to load. This reduces the initial load time, leading 
// to a faster and smoother user experience, especially for large applications.

// When you don't use `React.lazy` (or a similar code-splitting technique), all the code for every component (like 
// `Dashboard`, `Landing`, etc.) is bundled together into a single large JavaScript file. This means that even if 
// you're only viewing the `Dashboard` page, the code for `Landing` (and other components) will also be loaded 
// initially, which can lead to slower loading times. In contrast, using `React.lazy` ensures that each component is
// loaded on demand. For instance, navigating to the `/landing` route will only fetch `landing.jsx` at that time,
// and navigating to `/dashboard` will fetch `dashboard.jsx`, improving performance and reducing the initial load
// time.

// In React, Suspense is a built in component used with lazy loading to show a fallback UI (like a loader or message) 
// while your component is still being loaded.