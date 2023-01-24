import { React, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useCreateDogMutation } from "../../store/pawsitiveApi";

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
    createDog(details);
  };

  if (result.isSuccess) {
    result.isSuccess = false;
    setTimeout(() => handleClose(), 50);
  } else if (result.isError) {
    console.log(" Dog was not created");
    alert(result.error.data.detail);
  }

  return (
    <Modal show={activeAddDogModal} onHide={handleClose}>
      <Modal.Body
        className="rounded-3"
        style={{ backgroundColor: "#ffe45e", border: "5px solid black" }}
      >
        <form onSubmit={handleSubmit}>
          <h1 className="text-center mb-3 fw-bold">🦴 Add a dog 🦴</h1>
          <div className="mb-3">
            <input
              onChange={handleChange}
              placeholder="Name 🆔"
              style={{ backgroundColor: "#dee2e6", borderBottom: "2px solid black"}}
              required
              type="text"
              name="name"
              className="form-control fs-4"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={handleChange}
              placeholder="Gender ⚥"
              maxLength="17"
              style={{ backgroundColor: "#dee2e6", borderBottom: "2px solid black" }}
              required
              type="text"
              name="gender"
              className="form-control fs-4"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={handleChange}
              placeholder="Breed 🐶"
              style={{ backgroundColor: "#dee2e6", borderBottom: "2px solid black" }}
              required
              type="text"
              name="breed"
              className="form-control fs-4"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={handleChange}
              placeholder="Age ⏳"
              style={{ backgroundColor: "#dee2e6", borderBottom: "2px solid black" }}
              required
              type="text"
              name="age"
              className="form-control fs-4"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={handleChange}
              placeholder="Size 📏"
              style={{ backgroundColor: "#dee2e6", borderBottom: "2px solid black" }}
              required
              name="size"
              className="form-control fs-4"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={handleChange}
              placeholder="Picture URL 🖼️"
              style={{ backgroundColor: "#dee2e6", borderBottom: "2px solid black" }}
              required
              name="picture_url"
              className="form-control fs-4"
            />
          </div>
          <div className="mb-3">
            <textarea
              onChange={handleChange}
              placeholder="Notes 📝"
              style={{ height: "100px", backgroundColor: "#dee2e6", borderBottom: "2px solid black" }}
              name="notes"
              className="form-control fs-4"
            />
          </div>
          <button
            className="btn fw-bold fs-4 border border-dark border-2 rounded"
            style={{ backgroundColor: "#f55c7a", color: "#343a40" }}
          >
            Add Dog
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
export default AddDog;
