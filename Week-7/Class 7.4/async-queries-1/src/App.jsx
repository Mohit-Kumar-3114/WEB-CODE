import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notifications, totalNotificationSelector } from './atom'
import { useEffect } from 'react'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(async() => {
    const res= await fetch("https://sum-server.100xdevs.com/notifications")
    const result=await res.json()
    setNetworkCount(result)
  }, [])

  return (
    <>
      <button>Home</button>
      <button>My network {networkCount.network >= 100 ? "99+" : networkCount.network}</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging {networkCount.messaging}</button>
      <button>Notifications {networkCount.notifications}</button>
      <button>Me {totalNotificationCount}</button>
    </>
  )
}

export default App

// We will get data from a backend server but there is a problem in this approach as it flashes the data first to 
// zero and then to its value.

// Async data querying is the process of fetching data without pausing the rest of the program, allowing other 
// tasks to run while waiting for the data to be retrieved. This makes applications faster and more responsive.