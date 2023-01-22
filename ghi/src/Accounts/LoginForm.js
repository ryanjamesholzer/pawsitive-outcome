import { useState } from "react";
import { useLogInMutation } from "../store/pawsitiveApi";
import { useNavigate } from "react-router-dom";
import SignUpFormModal from "./SignUpFormModal";

let initialData = {
  username: "",
  password: "",
};

const LoginForm = () => {
  const navigate = useNavigate();
  const [logIn, result, error] = useLogInMutation();
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

  const picturePosition = {
    height: "200px",
    left: "105px",
    position: "relative",
    top: "-99px",
    width: "auto",
    margin: "-100px",
  };

  const centerButton = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "40%",
    backgroundColor: "#f55c7a",
    color: "#343a40",
  };

  return (
    <>
      <div className="offset-3 col-6">
        <div
          className="shadow p-4 rounded"
          style={{
            backgroundColor: "#ffe45e",
            marginTop: "22%",
            width: "600px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <img
              src={process.env.PUBLIC_URL + "transparentDogs2.png"}
              alt=""
              style={picturePosition}
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
                className="form-control p-3 fs-2 border border-3 border-dark"
              />
            </div>
            <div className="mb-5">
              <input
                onChange={handleChange}
                value={formData.password}
                placeholder="Password"
                required
                type="password"
                name="password"
                className="form-control p-3 fs-2 border border-3 border-dark"
              />
            </div>
            <div className="mb-4">
              <button
                className="btn fw-bold fs-1 border border-dark border-2 rounded"
                style={centerButton}
              >
                Login
              </button>
            </div>
            <div>
              <p className="fs-2">
                Don't have an account?{" "}
                <a className="fs-2" onClick={activateSignUpFormModal}>
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <SignUpFormModal
        activeSignUpModal={activeSignUpModal}
        setActiveSignUpModal={setActiveSignUpModal}
      />
    </>
  );
};

export default LoginForm;
