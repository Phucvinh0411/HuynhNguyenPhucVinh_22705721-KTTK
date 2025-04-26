import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './component/TopBar'
import Header from './component/Header'
import MainMenu from './component/MainMenu'
import Banner from './component/Banner'
import SideBar from './component/SideBar'
import MainContent from './component/MainContent'
import Contact from './component/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <Header />
        <MainMenu/>
        <Banner/>
        <SideBar/>
        <MainContent/>
        <Contact/>
      </div>
    </>
  )
}

export default App;
