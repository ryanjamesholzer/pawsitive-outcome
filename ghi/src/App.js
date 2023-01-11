import { Routes, Route } from 'react-router-dom'
import ListDogs from './dogs/ListDogs'
import Nav from './Nav'
import './App.css'
import LoginForm from './Accounts/LoginForm'
import SignUpForm from './Accounts/SignUpForm'
import { AuthProvider, useToken } from "./Accounts/useToken"

function GetToken() {
    useToken()
    return null
}


function App() {
  return (
    <AuthProvider>
      <GetToken/>
      <Nav />
      <div className='container'>
        <Routes>
          <Route path='/dogs' element={<ListDogs />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignUpForm />} />
        </Routes>
        </div>
    </AuthProvider>
  )
}

export default App
