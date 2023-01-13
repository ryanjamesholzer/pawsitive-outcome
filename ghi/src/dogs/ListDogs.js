import { React, useState, useCallback } from 'react'
import { useAuthContext } from '../Accounts/useToken'
import DogDetailModal from './Modals/DogDetailModal'
import { useGetDogsQuery } from '../store/dogsApi'


function ListDogs() {
    const {data, error, isLoading } = useGetDogsQuery()
    const [activeModal, setActiveModal] = useState(false)
    let [value, setValue] = useState(0)
    const {token} = useAuthContext()
    const [dogId, setDogId] = useState(null)

    const activateModal = useCallback((dog_id) => () => {
        setValue(value += 1)
        setDogId(dog_id)
        setActiveModal(true)
    }, [])

    if (isLoading) {
        return (
            <progress className='progress is-primary' max='100'></progress>
        )
    }

    return (
        <>
            {data.dogs &&
                <div>
                    {/* <ErrorNotification error={error} /> */}
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {data.dogs.map(dog => {
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
                        <DogDetailModal activeModal={activeModal} setActiveModal={setActiveModal} dogId={dogId} runUseEffect={value} token={token}/>
                    </div>
                </div>
            }
        </>
    )
}
export default ListDogs
