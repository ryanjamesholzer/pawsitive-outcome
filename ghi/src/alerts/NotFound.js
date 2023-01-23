import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="text-center p-5" id="not-found-page">
      <img
        src={process.env.PUBLIC_URL + "dog-pooping.png"}
        alt="/"
        id="dog-pooping-image"
      ></img>
      <h1>Oops! You seem to be lost.</h1>
      <p className="fs-2">Here are some helpful links:</p>
      <Link to="/Login" className="p-3 fs-2">
        Login
      </Link>
      <Link to="/dogs" className="p-3 fs-2">
        Dogs
      </Link>
      <Link to="/adoptions" className="p-3 fs-2">
        Adoptions
      </Link>
    </div>
  );
}
