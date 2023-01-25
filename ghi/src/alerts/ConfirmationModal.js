import Modal from "react-bootstrap/Modal";
import "./ConfirmationModal.css";

const ConfirmationModal = ({
  activeConfirmationModal,
  setActiveConfirmationModal,
  message,
  func,
}) => {
  function handleClose() {
    setActiveConfirmationModal(false);
  }

  return (
    <Modal
      show={activeConfirmationModal}
      onHide={handleClose}
      dialogClassName="confirmation-modal"
    >
      <Modal.Body id="confirmation-modal-body">
        <div className="row mb-4">
          <img
            src={require("../images/are_you_sure_dog.png")}
            alt="/"
            id="dog-picture"
          />
        </div>
        <div className="row">
          <p className="fw-bold fs-4 text-center">{message}</p>
          <p className="fw-bold fs-4 text-center">
            This process cannot be undone.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          onClick={func}
          className="btn fw-bold fs-4 border border-dark border-3 rounded"
          id="yes-button"
        >
          Yes
        </button>
        <button
          onClick={handleClose}
          className="btn fw-bold fs-4 border border-dark border-3 rounded"
          id="no-button"
        >
          No
        </button>
      </Modal.Footer>
    </Modal>
  );
};
export default ConfirmationModal;
