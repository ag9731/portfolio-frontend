import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Projects from './components/Projects'
import ProjectLists from './components/ProjectLists'
import Admin from './components/Admin/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Admin Login</h1>
        <Admin/>
        <Projects/>
        <ProjectLists/>
      </div>
    </>
  )
}

export default App
