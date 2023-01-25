import { NavLink } from "react-router-dom";
import { useLogOutMutation } from "./store/pawsitiveApi";
import { useGetTokenQuery } from "./store/pawsitiveApi";
import "./Nav.css";

function Nav() {
  const [logOut] = useLogOutMutation();
  const { data: token } = useGetTokenQuery();

  return (
    <nav className="navbar navbar-expand-sm" id="nav-bar">
      {token && (
        <div id="navbar-content">
          <ul className="navbar-nav pt-2">
            <li>
              <img
                className="navbar-brand me-3 ms-2"
                id="logo"
                src="..\pawsitive_outcome_logo.png"
                alt=""
                height="100em"
              />
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active fs-1 me-3"
                aria-current="page"
                to="/dogs"
              >
                Dogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active fs-1 me-3"
                aria-current="page"
                to="/adoptions"
              >
                Adoptions
              </NavLink>
            </li>
            <li className="nav-item ms-auto me-3">
              <NavLink
                onClick={logOut}
                className="btn fs-1 border border-dark border-3"
                aria-current="page"
                to="/login"
                id="logout-button"
              >
                Log out
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      {!token && (
        <div className="text-center ms-auto me-auto">
          <h1 id="nav-header">Pawsitive Outcome</h1>
        </div>
      )}
    </nav>
  );
}
export default Nav;
