import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home/Home.tsx' 
import About from './pages/About/About.tsx'
import Contact from './pages/Contact/Contact.tsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <App /> }>
      <Route path='' element={ <Home /> } />
      <Route path='about' element={ <About /> } />
      <Route path='contact' element={ <Contact /> }/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
