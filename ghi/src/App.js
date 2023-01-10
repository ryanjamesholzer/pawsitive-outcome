import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ListDogs from './dogs/ListDogs';
import './App.css';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import { AuthProvider, useToken } from "./token";

function GetToken() {
    useToken();
    return null
}

function App() {
  const [token, login, logout, signup, update] = useToken();
  return (
    <AuthProvider>
      <GetToken/>
        <Routes>
          {/* <Route path='/dogs' element={<ListDogs />} /> */}
          {<Route path='/login' element={<LoginForm token={token} login={login}/>} />}
          {<Route path='/signup' element={<SignUpForm token={token} signup={signup}/>} />}
        </Routes>
    </AuthProvider>
  )
}

export default App;
