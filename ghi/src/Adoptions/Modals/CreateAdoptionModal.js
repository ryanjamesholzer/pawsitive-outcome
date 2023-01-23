import { React, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useCreateAdoptionMutation } from "../../store/pawsitiveApi";
import { useNavigate } from "react-router-dom";

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
    console.log(result.error);
  }

  return (
    <Modal show={activeCreateAdoptionModal} onHide={handleClose}>
      <Modal.Body>
        <form onSubmit={handleSubmit} id="create-conference-form">
          <div className="form-floating mb-3">
            <input
              onChange={handleChange}
              placeholder="adopter_name"
              required
              type="text"
              name="adopter_name"
              id="adopter_name"
              className="form-control"
            />
            <label htmlFor="adopter_name">Adopter's Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              onChange={handleChange}
              placeholder="adopter_address"
              maxLength="250"
              required
              type="text"
              name="adopter_address"
              id="adopter_address"
              className="form-control"
            />
            <label htmlFor="adopter_address">Adopter's Address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              onChange={handleChange}
              placeholder="adopter_email"
              required
              type="text"
              name="adopter_email"
              id="adopter_email"
              className="form-control"
            />
            <label htmlFor="adopter_email">Adopter's Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              onChange={handleChange}
              placeholder="adopter_phone_number"
              required
              type="text"
              name="adopter_phone_number"
              id="adopter_phone_number"
              className="form-control"
            />
            <label htmlFor="adopter_phone_number">Adopter's Phone Number</label>
          </div>
          <div className="form-floating mb-3">
            <input
              onChange={handleChange}
              placeholder="date_of_adoption"
              type="date"
              required
              name="date_of_adoption"
              id="date_of_adoption"
              className="form-control"
            />
            <label htmlFor="date_of_adoption">Date Of Adoption</label>
          </div>

          <button className="btn btn-primary">File Adoption</button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
export default CreateAdoptionModal;
