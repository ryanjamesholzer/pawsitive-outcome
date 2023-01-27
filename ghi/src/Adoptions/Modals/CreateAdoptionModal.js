import { React, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useCreateAdoptionMutation } from "../../store/pawsitiveApi";
import { useNavigate } from "react-router-dom";
import "./CreateAdoptionModal.css";

const initialState = {
  adopter_name: "",
  adopter_address: "",
  adopter_email: "",
  adopter_phone_number: "",
  dog_id: "",
  date_of_adoption: "",
};

function CreateAdoptionModal({
  dog,
  activeCreateAdoptionModal,
  setActiveCreateAdoptionModal,
}) {
  const [details, setDetails] = useState(initialState);
  const [createAdoption, result] = useCreateAdoptionMutation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  function handleClose() {
    setActiveCreateAdoptionModal(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    details.dog_id = dog.id;
    createAdoption(details);
  };

  if (result.isSuccess) {
    setTimeout(() => {
      navigate("/adoptions");
    }, 50);
  } else if (result.isError) {
    alert(result.error.data.detail);
  }

  return (
    <Modal show={activeCreateAdoptionModal} onHide={handleClose}>
      <Modal.Body id="body-detail">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center mb-3 fw-bold"> 🏡Their Forever Home 🏡</h1>
          <div className=" mb-3">
            <input
              onChange={handleChange}
              placeholder="Adopter Name 🧍‍♂️ 🧍‍♀️"
              required
              type="text"
              name="adopter_name"
              id="adopter_name"
              className="form-control fs-4 input-detail"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={handleChange}
              placeholder="Adopter Address 📍"
              maxLength="250"
              required
              type="text"
              name="adopter_address"
              id="adopter_address"
              className="form-control fs-4 input-detail"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={handleChange}
              placeholder="Adopter Email 📧"
              required
              type="text"
              name="adopter_email"
              id="adopter_email"
              className="form-control fs-4 input-detail"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={handleChange}
              placeholder="Adopter Phone Number 📞"
              required
              type="text"
              name="adopter_phone_number"
              id="adopter_phone_number"
              className="form-control fs-4 input-detail"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={handleChange}
              placeholder="Date of Adoption"
              type="date"
              required
              name="date_of_adoption"
              id="date_of_adoption"
              className="form-control fs-4 input-detail"
            />
          </div>

          <button
            id="button"
            className="btn fw-bold fs-4 border border-dark border-2 rounded"
          >
            File Adoption
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
export default CreateAdoptionModal;
