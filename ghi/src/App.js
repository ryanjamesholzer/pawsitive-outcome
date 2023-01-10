import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListDogs from './dogs/ListDogs'
import Nav from './Nav'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
      <Routes>
        <Route path='/dogs' element={<ListDogs />} />
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
