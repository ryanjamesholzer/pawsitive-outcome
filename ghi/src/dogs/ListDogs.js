import { React, useState, useEffect, useCallback } from 'react'
import DogDetailModal from './Modals/DogDetailModal'


function ListDogs() {
    const [dogs, setDogs] = useState([])
    const [dogId, setDogId] = useState(null)
    const [activeModal, setActiveModal] = useState(false)
    let [value, setValue] = useState(0)

    useEffect(() => {
        fetch('http://localhost:8000/api/dogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setDogs(data.dogs)
            })
    }, [])


    const activateModal = useCallback((dog_id) => () => {
        console.log(`This is dog_id: ${dog_id}`)
        setValue(value += 1)
        setDogId(dog_id)
        setActiveModal(true)
    }, [])


    return (
        <>
            {dogs &&
                <div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {dogs.map(dog => {
                            return (
                                <div className="col-sm-6" key={dog.id}>
                                    <div className="card mb-3 shadow">
                                        <img src={dog.picture_url} className="card-img-top" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">{dog.name}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">Breed: {dog.breed}</h6>
                                            <h6 className="card-subtitle mb-2 text-muted">Gender: {dog.gender}</h6>
                                            <h6 className="card-subtitle mb-2 text-muted">Age: {dog.age}</h6>
                                            <button className='btn btn-primary' onClick={activateModal(dog.id)} >Read More</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <DogDetailModal activeModal={activeModal} setActiveModal={setActiveModal} dogId={dogId} runUseEffect={value}/>
                    </div>
                </div>
            }
        </>
    )
}
export default ListDogs