import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CreateAdoptionModal from "../../Adoptions/Modals/CreateAdoptionModal";
import { useShowDogQuery } from "../../store/pawsitiveApi";
import { useDeleteDogMutation } from "../../store/pawsitiveApi";
import ConfirmationModal from "../../alerts/ConfirmationModal";
import "./DogDetailModal.css";

function DogDetailModal({
  activeDogDetailModal,
  setActiveDogDetailModal,
  dogId,
}) {
  const skip = dogId === null;
  const { data: dog } = useShowDogQuery(dogId, { skip });
  const [activeCreateAdoptionModal, setActiveCreateAdoptionModal] =
    useState(false);
  const [activeConfirmationModal, setActiveConfirmationModal] = useState(false);
  const [deleteDog] = useDeleteDogMutation();
  const confirmationMessage = "Are you sure you want to remove this dog?";

  function handleDelete() {
    setActiveConfirmationModal(false);
    handleClose();
    deleteDog(dogId);
  }
  const activateCreateAdoptionModal = () => {
    setActiveCreateAdoptionModal(true);
    setActiveDogDetailModal(false);
  };

  const activateConfirmationModal = () => {
    setActiveConfirmationModal(true);
  };

  function handleClose() {
    setActiveDogDetailModal(false);
  }

  return (
    <>
      {dog && (
        <Modal
          dialogClassName={"dog-detail-modal round-3"}
          show={activeDogDetailModal}
          onHide={handleClose}
        >
          <Modal.Body id="card-background">
            <div id="detail-modal-body">
              <img src={dog.picture_url} alt="..." id="dog-detail-image" />
              <div className="row" id="dogs-detail-container">
                <h4 className="text-3xl uppercase font-bold" id="name-emblem">
                  {dog.name}
                </h4>
                <p
                  className="card-subtitle mb-2 text-muted"
                  id="text-1-background"
                >
                  Gender: {dog.gender}
                </p>
                <p
                  className="card-subtitle mb-2 text-muted"
                  id="text-2-background"
                >
                  Breed: {dog.breed}
                </p>
                <p
                  className="card-subtitle mb-2 text-muted"
                  id="text-1-background"
                >
                  Age: {dog.age}
                </p>
                <p
                  className="card-subtitle mb-2 text-muted"
                  id="text-2-background"
                >
                  Size: {dog.size}
                </p>
                <p
                  className="card-subtitle mb-2 text-muted"
                  id="text-1-background"
                >
                  Notes: {dog.notes}
                </p>
                <div id="center-button">
                  <button
                    className="btn"
                    id="adopt-button"
                    onClick={activateCreateAdoptionModal}
                  >
                    Adopt
                  </button>
                  <span id="spacing-button"></span>
                  <button
                    className="btn"
                    id="remove-button"
                    onClick={activateConfirmationModal}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
      <CreateAdoptionModal
        dog={dog}
        activeCreateAdoptionModal={activeCreateAdoptionModal}
        setActiveCreateAdoptionModal={setActiveCreateAdoptionModal}
      />
      <ConfirmationModal
        activeConfirmationModal={activeConfirmationModal}
        setActiveConfirmationModal={setActiveConfirmationModal}
        message={confirmationMessage}
        func={handleDelete}
      />
    </>
  );
}
export default DogDetailModal;
