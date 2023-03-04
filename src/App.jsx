import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import Signup from './components/Auth/Signup'
import Account from './components/Auth/Account'
import './global.scss'


function App() {

  const [user, setUser] = useState()

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home user={user} setUser={setUser}/>}/>
        <Route path='/shop' element={<Shop/>}/>
        {
          user?(
            <Route path='/account' element={<Account/>}/>
          ):(
            <Route path='/account' element={<Signup/>}/>
          )
        }
      </Routes>
    </Router>
  )
}

export default App