import { useDeleteAdoptionMutation } from "../../store/pawsitiveApi";
import { useShowAdoptionQuery } from "../../store/pawsitiveApi";
import { useUpdateDogMutation } from "../../store/pawsitiveApi";
import ConfirmationModal from "../../alerts/ConfirmationModal";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "./AdoptionDetailModal.css";

function AdoptionDetailModal({
  activeAdoptionDetailModal,
  setActiveAdoptionDetailModal,
  adoptionId,
  dogId,
}) {
  const skip = adoptionId === null;
  const { data: adoption } = useShowAdoptionQuery(adoptionId, { skip });
  const [deleteAdoption] = useDeleteAdoptionMutation();
  const [updateDog] = useUpdateDogMutation();
  const [activeConfirmationModal, setActiveConfirmationModal] = useState(false);
  const message = "Are you sure you want to undo this adoption?";

  async function handleDelete() {
    setActiveConfirmationModal(false);
    deleteAdoption(adoptionId);
    handleClose();
    await updateDog(dogId);
  }

  const activateConfirmationModal = () => {
    setActiveConfirmationModal(true);
  };

  function handleClose() {
    setActiveAdoptionDetailModal(false);
  }

  return (
    <>
      {adoption && (
        <Modal
          show={activeAdoptionDetailModal}
          onHide={handleClose}
          dialogClassName="adoption-detail-modal rounded-3"
          id="adoption-detail-modal"
        >
          <Modal.Body id="adoption-detail-modal-body">
            <div className="container">
              <div className="row">
                <img
                  src={adoption.dog.picture_url}
                  alt="..."
                  className="card-img-top"
                  id="dog-image"
                />
                <div className="row" id="dogs-container">
                  <div className="col">
                    <h1 className="mt-3 text-center">Dog's Info</h1>
                    <hr className="border border-primary border-3 opacity-75"></hr>
                    <table className="mb-3">
                      <tbody>
                        <tr>
                          <th className="fs-3">Name:</th>
                          <td className="fs-3 ps-3">{adoption.dog.name}</td>
                        </tr>
                        <tr>
                          <th className="fs-3">Breed:</th>
                          <td className="fs-3 ps-3">{adoption.dog.breed}</td>
                        </tr>
                        <tr>
                          <th className="fs-3">Age:</th>
                          <td className="fs-3 ps-3">{adoption.dog.age}</td>
                        </tr>
                        <tr>
                          <th className="fs-3">Size:</th>
                          <td className="fs-3 ps-3">{adoption.dog.size}</td>
                        </tr>
                        <tr>
                          <th className="fs-3 align-top">Notes:</th>
                          <td className="fs-3 ps-3" id="dog-notes">
                            {adoption.dog.notes}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row" id="adopters-container">
                  <div className="col">
                    <h1 className="mt-3 text-center">Adopter's Info</h1>
                    <hr className="border border-primary border-3 opacity-75"></hr>
                    <table className="mb-3">
                      <tbody>
                        <tr>
                          <th className="fs-3">Name:</th>
                          <td className="fs-3 ps-3">{adoption.adopter_name}</td>
                        </tr>
                        <tr>
                          <th className="fs-3">Address:</th>
                          <td className="fs-3 ps-3">
                            {adoption.adopter_address}
                          </td>
                        </tr>
                        <tr>
                          <th className="fs-3">Email:</th>
                          <td className="fs-3 ps-3">
                            {adoption.adopter_email}
                          </td>
                        </tr>
                        <tr>
                          <th className="fs-3">Phone Number:</th>
                          <td className="fs-3 ps-3">
                            {adoption.adopter_phone_number}
                          </td>
                        </tr>
                        <tr>
                          <th className="fs-3">Date of Adoption:</th>
                          <td className="fs-3 ps-3">
                            {adoption.date_of_adoption}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col text-center">
                  <button
                    className="btn fw-bold fs-4 border border-dark border-3 rounded"
                    id="undo-button"
                    onClick={activateConfirmationModal}
                  >
                    Undo Adoption
                  </button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
      <ConfirmationModal
        activeConfirmationModal={activeConfirmationModal}
        setActiveConfirmationModal={setActiveConfirmationModal}
        message={message}
        func={handleDelete}
      />
    </>
  );
}
export default AdoptionDetailModal;
