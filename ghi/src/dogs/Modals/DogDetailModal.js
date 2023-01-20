import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import CreateAdoptionModal from '../../Adoptions/Modals/CreateAdoptionModal'
import { useShowDogQuery } from '../../store/pawsitiveApi'
import { useDeleteDogMutation } from '../../store/pawsitiveApi'
import ConfirmationModal from '../../alerts/ConfirmationModal'

function DogDetailModal({activeDogDetailModal, setActiveDogDetailModal, dogId}) {
    const skip = dogId === null
    const {data: dog} = useShowDogQuery(dogId,{skip})
    const [activeCreateAdoptionModal, setActiveCreateAdoptionModal] = useState(false)
    const [activeConfirmationModal, setActiveConfirmationModal] = useState(false)
    const [deleteDog] = useDeleteDogMutation()
    const confirmationMessage = "Are you sure you want to remove the dog?"

    function handleDelete() {
        setActiveConfirmationModal(false)
        handleClose()
        deleteDog(dogId)
    }
    const activateCreateAdoptionModal =  () => {
        setActiveCreateAdoptionModal(true)
        setActiveDogDetailModal(false)
    }

    const activateConfirmationModal =  () => {
        setActiveConfirmationModal(true)
    }

    function handleClose() {
        setActiveDogDetailModal(false)
    }


    return(
        <>
            {dog &&
                <Modal className="" show={activeDogDetailModal} onHide={handleClose}>
                    <Modal.Body>
                        <div className="card" style={{width: '18rem'}}>
                            <img src={dog.picture_url} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="text-3xl uppercase font-bold">{dog.name}</h5>
                                    <p className="card-subtitle mb-2 text-muted">
                                        Gender: {dog.gender}
                                    </p>
                                    <p className="card-subtitle mb-2 text-muted">
                                        Breed: {dog.breed}
                                    </p>
                                    <p className="card-subtitle mb-2 text-muted">
                                        Age: {dog.age}
                                    </p>
                                    <p className="card-subtitle mb-2 text-muted">
                                        Size: {dog.size}
                                    </p>
                                    <p className="card-subtitle mb-2 text-muted">
                                        Notes: {dog.notes}
                                    </p>
                                    <button className='btn btn-primary' onClick={activateCreateAdoptionModal}>Adopt</button>
                                    <button className='btn btn-primary' onClick={activateConfirmationModal}>Remove</button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            }
            <CreateAdoptionModal dog={dog} activeCreateAdoptionModal={activeCreateAdoptionModal} setActiveCreateAdoptionModal={setActiveCreateAdoptionModal} />
            <ConfirmationModal activeConfirmationModal={activeConfirmationModal} setActiveConfirmationModal={setActiveConfirmationModal} message={confirmationMessage} func={handleDelete} />
        </>
    )
}
export default DogDetailModal
