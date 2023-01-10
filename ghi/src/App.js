import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListDogs from './dogs/ListDogs'
import Nav from './Nav'
import './App.css'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import { AuthProvider, useToken } from "./token"

function GetToken() {
    useToken()
    return null
}

function App() {
  const [token, login, logout, signup, update] = useToken()
  return (
    <AuthProvider>
      <GetToken/>
      <Nav />
      <div className='container'>
        <Routes>
          <Route path='/dogs' element={<ListDogs />} />
          {<Route path='/login' element={<LoginForm token={token} login={login}/>} />}
          {<Route path='/signup' element={<SignUpForm token={token} signup={signup}/>} />}
        </Routes>
        </div>
    </AuthProvider>
  )
}

export default App
