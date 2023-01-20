import { React, useState, useCallback } from 'react'
import DogDetailModal from './Modals/DogDetailModal'
import { useGetDogsQuery } from '../store/pawsitiveApi'
import AddDog from './Modals/AddDogModal'

function ListDogs() {
    const {data, isLoading } = useGetDogsQuery()
    const [activeDogDetailModal, setActiveDogDetailModal] = useState(false)
    const [dogId, setDogId] = useState(null)
    const [query, setQuery] = useState("")
    const [activeAddDogModal, setActiveAddDogModal] = useState(false)
    let unadopted = null

    const activateAddDogModal =  () => {
        setActiveAddDogModal(true)
    }

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
        <h1>Our Dogs</h1>
            <div>
                <input placeholder="Search for dog" onChange={event => setQuery(event.target.value)}/>
                <button onClick={activateAddDogModal}>Add Dog</button>
            </div>
            {unadopted &&
                <div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {unadopted.map(dog => {
                            if(dog.name.toLowerCase().includes(query.toLowerCase()) || query === '') {   
                                return (
                                    <div className="col-sm-6" key={dog.id}>
                                        <div className="card mb-3 shadow">
                                            <img src={dog.picture_url} className="card-img-top" alt="" />
                                            <div className="card-body">
                                                <h5 className="card-title">{dog.name}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">Breed: {dog.breed}</h6>
                                                <h6 className="card-subtitle mb-2 text-muted">Gender: {dog.gender}</h6>
                                                <h6 className="card-subtitle mb-2 text-muted">Age: {dog.age}</h6>
                                                <button className='btn btn-primary' onClick={activateDogDetailModal(dog.id)} >Dog Deets</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                        <DogDetailModal activeDogDetailModal={activeDogDetailModal} setActiveDogDetailModal={setActiveDogDetailModal} dogId={dogId} />
                    </div>
                </div>
            }
            <AddDog setActiveAddDogModal={setActiveAddDogModal} activeAddDogModal={activeAddDogModal} />
        </>
    )
}
export default ListDogs
