import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './component/TopBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <TopBar />
      </div>
    </>
  )
}

export default App;
