import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Nav/Navbar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Success from './pages/Success'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='app-shell'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/success' element={<Success />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
