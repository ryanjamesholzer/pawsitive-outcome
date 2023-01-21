import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ListDogs from './dogs/ListDogs'
import Nav from './Nav'
import './App.css'
import LoginForm from './Accounts/LoginForm'
import SignUpFormModal from './Accounts/SignUpFormModal'
import ListAdoptions from './Adoptions/ListAdoptions'


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className='container'>
        <Routes>
          <Route path='/dogs' element={<ListDogs />} />
          <Route path='/adoptions' element={<ListAdoptions />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignUpFormModal />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
