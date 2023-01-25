import { NavLink } from "react-router-dom";
import { useLogOutMutation } from "./store/pawsitiveApi";
import { useGetTokenQuery } from "./store/pawsitiveApi";
import "./Nav.css";

function Nav() {
  const [logOut] = useLogOutMutation();
  const { data: token } = useGetTokenQuery();

  return (
    <nav className="navbar navbar-expand-sm" id="navbar">
      {token && (
        <div id="navbar-content">
          <button
            id="navbar-toggler"
            className="navbar-toggler border border-dark border-3 ms-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img
              className="navbar-brand ps-3"
              id="logo"
              src="..\pawsitive_outcome_logo.png"
              alt=""
              height="100em"
            />
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item ms-3">
                <NavLink
                  className="nav-link active fs-1"
                  aria-current="page"
                  to="/dogs"
                >
                  Dogs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active fs-1 ms-3"
                  aria-current="page"
                  to="/adoptions"
                >
                  Adoptions
                </NavLink>
              </li>
            </ul>
            <div className="ms-auto me-3">
              <NavLink
                onClick={logOut}
                className="btn fs-1 border border-dark border-3 ms-3"
                aria-current="page"
                to="/login"
                id="logout-button"
              >
                Log out
              </NavLink>
            </div>
          </div>
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
