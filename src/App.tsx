import { useState } from 'react'

import { Outlet } from 'react-router-dom'
import Header from './pages/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
