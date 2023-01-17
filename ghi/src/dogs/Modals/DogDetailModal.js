import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import CreateAdoptionModal from '../../Adoptions/Modals/CreateAdoptionModal'
import { useShowDogQuery } from '../../store/pawsitiveApi'

function DogDetailModal({activeDogDetailModal, setActiveDogDetailModal, dogId}) {
    const skip = dogId === null
    const {data: dog} = useShowDogQuery(dogId,{skip})
    const [activeCreateAdoptionModal, setActiveCreateAdoptionModal] = useState(false)

    const activateCreateAdoptionModal =  () => {
        setActiveCreateAdoptionModal(true)
        setActiveDogDetailModal(false)
    }

    function handleClose() {
        setActiveDogDetailModal(false)
    }


    return(
        <>
            {dog &&
                <Modal show={activeDogDetailModal} onHide={handleClose}>
                    <Modal.Body>
                        <div className="card" style={{width: '18rem'}}>
                            <img src={dog.picture_url} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{dog.name}</h5>
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
                                    <button className='btn btn-primary' onClick={activateCreateAdoptionModal} >Adoption</button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            }
            <CreateAdoptionModal dog={dog} activeCreateAdoptionModal={activeCreateAdoptionModal} setActiveCreateAdoptionModal={setActiveCreateAdoptionModal} />
        </>
    )
}
export default DogDetailModal
