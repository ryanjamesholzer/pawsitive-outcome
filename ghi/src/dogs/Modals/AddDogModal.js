import { React, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useCreateDogMutation } from "../../store/pawsitiveApi";
import "./AddDogModal.css";
import { useDispatch } from "react-redux";
import { setShow } from "../../store/toastShowSlice";
import { setMessage } from "../../store/toastMessageSlice";

const initialState = {
  name: "",
  gender: "",
  breed: "",
  age: "",
  size: "",
  picture_url: "",
  notes: "",
};

function AddDog({ activeAddDogModal, setActiveAddDogModal }) {
  const [details, setDetails] = useState(initialState);
  const [createDog, result] = useCreateDogMutation();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  function handleClose() {
    setActiveAddDogModal(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setMessage(`${details.name} was added.`));
    dispatch(setShow(true));
    createDog(details);
  };

  if (result.isSuccess) {
    result.isSuccess = false;
    setTimeout(() => handleClose(), 50);
  } else if (result.isError) {
    alert(result.error.data.detail);
  }

  return (
    <Modal show={activeAddDogModal} onHide={handleClose}>
      <Modal.Body className="rounded-3" id="body-detail">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center mb-3 fw-bold">🦴 Add a dog 🦴</h1>
          <div className="mb-3">
            <input
              onChange={handleChange}
              placeholder="Name 🆔"
              required
              type="text"
              name="name"
              className="form-control fs-4 input-detail"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={handleChange}
              placeholder="Gender ⚥"
              maxLength="17"
              required
              type="text"
              name="gender"
              className="form-control fs-4 input-detail"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={handleChange}
              placeholder="Breed 🐶"
              required
              type="text"
              name="breed"
              className="form-control fs-4 input-detail"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={handleChange}
              placeholder="Age ⏳"
              required
              type="text"
              name="age"
              className="form-control fs-4 input-detail"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={handleChange}
              placeholder="Size 📏"
              required
              name="size"
              className="form-control fs-4 input-detail"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={handleChange}
              placeholder="Picture URL 🖼️"
              required
              name="picture_url"
              className="form-control fs-4 input-detail"
            />
          </div>
          <div className="mb-3">
            <textarea
              onChange={handleChange}
              placeholder="Notes 📝"
              id="textarea-detail"
              name="notes"
              className="form-control fs-4"
            />
          </div>
          <button
            className="btn fw-bold fs-4 border border-dark border-2 rounded"
            id="button"
          >
            Add Dog
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
export default AddDog;
