import { NavLink } from 'react-router-dom'
import { useLogOutMutation } from './store/pawsitiveApi'


function Nav() {
    const [logOut] = useLogOutMutation()

    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#ffe45e'}}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to='/dogs'>
                    <img className='navbar-brand' src='..\dog.png' alt='' height='100em'/>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active fs-1 mx-auto" aria-current="page" to="/dogs" style={{color: '#343a40'}}>Dogs</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className="nav-link active fs-1 mx-auto" aria-current="page" to="/adoptions" style={{color: '#343a40'}}>Adoptions</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink onClick={logOut} className="nav-link btn active fs-1 mx-5 px-3 position-absolute end-0 border border-dark border-3" aria-current="page" to="/login" style={{backgroundColor: '#f55c7a', color: "#343a40"}}>Log out</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Nav
