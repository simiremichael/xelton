import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'

function App() {


  return (
    <>
      <div>
      <Routes>
   <Route path='/' element={<Home/>}></Route>
   <Route path='/about' element={<About/>}></Route>
   <Route path='/contact' element={<Contact/>}></Route>
   <Route path='/privacy' element={<Privacy/>}></Route>
    </Routes>
      </div>
    </>
  )
}

export default App
