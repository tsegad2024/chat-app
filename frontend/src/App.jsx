import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import SettingPage from './pages/SettingPage'
import ProfilePage from './pages/ProfilePage'
import { useAuthStore } from './store/useAuthStore.js'

import { useEffect } from 'react'
import { Loader } from 'lucide-react'

function App() {
  const {checkAuth, authUser, isCheckingAuth, onlineUsers} = useAuthStore();
  
  useEffect(() => {
    checkAuth()
  }, [checkAuth])
  
  if (isCheckingAuth && !authUser) return (
    <div className="flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin"/>
    </div>
  )
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element = {authUser? <Homepage/> : <Navigate to='/login'/>}/>
        <Route path='/signup' element = {<SignupPage/>}/>
        <Route path='/login' element = {<LoginPage/>}/>
        <Route path='/settings' element = {<SettingPage/>}/>
        <Route path='/profile' element = { authUser? <ProfilePage/>: <Navigate to= '/login' />}/>
      </Routes>

    </div>
  )
}

export default App
