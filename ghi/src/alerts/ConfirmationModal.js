import Modal from 'react-bootstrap/Modal'

const ConfirmationModal = ({activeConfirmationModal, setActiveConfirmationModal, message, func}) => {

    function handleClose() {
        setActiveConfirmationModal(false)
    }

    return (
        <Modal show={activeConfirmationModal} onHide={handleClose}>
            <Modal.Body>
                <p>{message}</p>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={func}>Yes</button>
                <button onClick={handleClose}>No</button>
            </Modal.Footer>
        </Modal>
    )
}
export default ConfirmationModal
