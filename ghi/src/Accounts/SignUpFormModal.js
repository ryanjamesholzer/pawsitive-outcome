import { useSignUpMutation } from "../store/pawsitiveApi";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "./SignUpForm.css";

let initialData = {
  username: "",
  password: "",
  full_name: "",
};

const SignUpFormModal = ({ activeSignUpModal, setActiveSignUpModal }) => {
  const navigate = useNavigate();
  const [signUp, result] = useSignUpMutation();
  const [formData, setFormData] = useState(initialData);
  const [passConfirm, setPassConfirm] = useState("");

  function handleClose() {
    setActiveSignUpModal(false);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const passConfirmChange = (e) => {
    setPassConfirm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password === passConfirm) {
      const response = await signUp(formData);
      setFormData(initialData);
      if (response.error) {
        alert("Username already taken");
      } else {
        setTimeout(() => navigate("/dogs"), 51);
      }
    } else {
      alert("Password does not match confirmation.");
    }
  };

  return (
    <Modal
      size="lg"
      show={activeSignUpModal}
      onHide={handleClose}
      id="sign-up-form-modal"
      className="modal"
    >
      <Modal.Body className="rounded-3" id="sign-up-form-modal-body">
        <div className="container">
          <div className="row">
            <div className="col">
              <img
                src={require("../images/googly_eyes.png")}
                alt="/"
                id="sign-up-picture"
              />
            </div>
            <div className="col">
              <form onSubmit={handleSubmit} id="signUp-formModal">
                <h1 className="text-center mb-3 fw-bold">Sign Up</h1>
                <div className="mb-3">
                  <input
                    onChange={handleChange}
                    value={formData.name}
                    placeholder="Username"
                    required
                    type="text"
                    name="username"
                    className="form-control fs-4 border border-3 border-dark"
                    autoFocus
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
                    className="form-control fs-4 border border-3 border-dark"
                    autoComplete="on"
                  />
                </div>
                <div className="mb-3">
                  <input
                    onChange={passConfirmChange}
                    placeholder="Confirm Password"
                    required
                    type="password"
                    name="passwordConfirmation"
                    className="form-control fs-4 border border-3 border-dark"
                    autoComplete="on"
                  />
                </div>
                <div className="mb-3">
                  <input
                    onChange={handleChange}
                    value={formData.full_name}
                    placeholder="Full Name"
                    required
                    type="text"
                    name="full_name"
                    className="form-control fs-4 border border-3 border-dark"
                  />
                </div>
                <button
                  className="btn fw-bold fs-4 border border-dark border-3 rounded"
                  id="sign-up-button"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SignUpFormModal;
