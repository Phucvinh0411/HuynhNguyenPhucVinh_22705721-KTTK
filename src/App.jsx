import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './component/TopBar'
import Header from './component/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <Header />
      </div>
    </>
  )
}

export default App;
