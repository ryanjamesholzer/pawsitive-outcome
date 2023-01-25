import { useLogInMutation } from "../store/pawsitiveApi";
import { Link, useNavigate } from "react-router-dom";
import SignUpFormModal from "./SignUpFormModal";
import { useState } from "react";
import "./LoginForm.css";

let initialData = {
  username: "",
  password: "",
};

const LoginForm = () => {
  const navigate = useNavigate();
  const [logIn, result] = useLogInMutation();
  const [formData, setFormData] = useState(initialData);
  const [activeSignUpModal, setActiveSignUpModal] = useState(false);

  const activateSignUpFormModal = () => {
    setActiveSignUpModal(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await logIn(formData);
  };

  if (result.isSuccess) {
    result.isSuccess = false;
    setTimeout(() => {
      navigate("/dogs");
    }, 50);
  } else if (result.isError) {
    alert(result.error.data.detail);
  }

  return (
    <>
      <div className="ms-auto me-auto shadow p-4 rounded" id="login-form">
        <form onSubmit={handleSubmit}>
          <img
            src={process.env.PUBLIC_URL + "transparentDogs2.png"}
            alt=""
            id="dogs-picture"
          />
          <h1 className="fw-bold">User Login</h1>
          <div className="mb-3">
            <input
              autoFocus
              onChange={handleChange}
              value={formData.name}
              placeholder="Username"
              required
              type="text"
              name="username"
              className="form-control fs-2 border border-3 border-dark"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={handleChange}
              value={formData.password}
              placeholder="Password"
              required
              type="password"
              name="password"
              className="form-control fs-2 border border-3 border-dark"
            />
          </div>
          <div className="mb-3">
            <button
              className="btn fw-bold fs-2 border border-dark border-3 rounded"
              id="login-button"
            >
              Login
            </button>
          </div>
          <div>
            <p className="fs-2">
              Don't have an account?{" "}
              <Link className="fs-2" onClick={activateSignUpFormModal}>
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
      <SignUpFormModal
        activeSignUpModal={activeSignUpModal}
        setActiveSignUpModal={setActiveSignUpModal}
      />
    </>
  );
};

export default LoginForm;
