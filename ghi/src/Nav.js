import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import AddDog from './dogs/Modals/AddDogModal'

function Nav() {
    const [activeAddModal, setActiveAddModal] = useState(false)

    const activateAddModal =  () => {
        setActiveAddModal(true)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/dogs">Pawsitive Outcome</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/dogs">List Dogs</NavLink>
                        </li>
                        <li className="nav-item">
                            <button onClick={activateAddModal} className="nav-link active" aria-current="page">Add Dog</button>
                            <AddDog activeAddModal={activeAddModal} setActiveAddModal={setActiveAddModal} />
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/logout">Logout</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Nav