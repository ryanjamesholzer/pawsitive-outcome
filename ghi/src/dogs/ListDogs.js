import { React, useState, useCallback } from 'react'
import DogDetailModal from './Modals/DogDetailModal'
import { useGetDogsQuery } from '../store/pawsitiveApi'

function ListDogs() {
    const {data, error, isLoading } = useGetDogsQuery()
    const [activeDogDetailModal, setActiveDogDetailModal] = useState(false)
    const [dogId, setDogId] = useState(null)
    let unadopted = null


    const activateDogDetailModal = useCallback((dog_id) => () => {
        setDogId(dog_id)
        setActiveDogDetailModal(true)
    }, [])

    if (isLoading) {
        return (
            <progress className='progress is-primary' max='100'></progress>
        )
    } else {
        unadopted = data.dogs.filter(dog => dog.is_adopted === false)
    }

    return (
        <>
            {unadopted &&
                <div>
                    {/* <ErrorNotification error={error} /> */}
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {unadopted.map(dog => {
                            return (
                                <div className="col-sm-6" key={dog.id}>
                                    <div className="card mb-3 shadow">
                                        <img src={dog.picture_url} className="card-img-top" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">{dog.name}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">Breed: {dog.breed}</h6>
                                            <h6 className="card-subtitle mb-2 text-muted">Gender: {dog.gender}</h6>
                                            <h6 className="card-subtitle mb-2 text-muted">Age: {dog.age}</h6>
                                            <button className='btn btn-primary' onClick={activateDogDetailModal(dog.id)} >Read More</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <DogDetailModal activeDogDetailModal={activeDogDetailModal} setActiveDogDetailModal={setActiveDogDetailModal} dogId={dogId} />
                    </div>
                </div>
            }
        </>
    )
}
export default ListDogs
