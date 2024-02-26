import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'

function App() {
  

  return (
    <UserContextProvider>
       
       <Login />
       <Profile />
      
    </UserContextProvider>
  )
}

export default App
