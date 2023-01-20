import { useGetDogsQuery } from '../store/pawsitiveApi'
import { React, useState, useCallback } from 'react'
import DogDetailModal from './Modals/DogDetailModal'
import AddDog from './Modals/AddDogModal'

function ListDogs() {
    const [activeDogDetailModal, setActiveDogDetailModal] = useState(false)
    const [activeAddDogModal, setActiveAddDogModal] = useState(false)
    const {data, isLoading } = useGetDogsQuery()
    const [dogId, setDogId] = useState(null)
    const [query, setQuery] = useState("")
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
            <div className='p-3'>
                <div className='d-flex my-3'>
                    <input className='my-3 p-2 flex-grow-1 fs-3 fw-bold border border-dark border-3 rounded' placeholder="Search for dog" onChange={event => setQuery(event.target.value)} />
                    <span className='p-3'> </span>
                    <button className='btn fw-bold my-3 py-3 px-5 fs-3 border border-dark border-3 rounded' onClick={activateAddDogModal} style={{backgroundColor: '#f55c7a', color: '#343a40'}}>Add Dog</button>
                </div>
                {unadopted &&
                    <div>
                        <div className="row row-cols-1 row-cols-md-4 g-4">
                            {unadopted.map(dog => {
                                if(dog.name.toLowerCase().includes(query.toLowerCase()) || query === '') {
                                    return (
                                        <div className="" key={dog.id}>
                                            <div className="card mb-3 shadow rounded" style={{backgroundColor: '#ffe45e'}}>
                                                <div className="card-body">
                                                    <h3 className="card-title fw-bold fs-1">{dog.name}</h3>
                                                    <img src={dog.picture_url} className="card-img-top mb-2 rounded" alt="" />
                                                    <h6 className="card-subtitle mb-2 text-muted fs-4">Breed: {dog.breed}</h6>
                                                    <h6 className="card-subtitle mb-2 text-muted fs-4">Gender: {dog.gender}</h6>
                                                    <h6 className="card-subtitle mb-2 text-muted fs-4">Age: {dog.age}</h6>
                                                    <button className='btn fw-bold fs-4 border border-dark border-1 rounded' onClick={activateDogDetailModal(dog.id)} style={{backgroundColor: '#f55c7a', color: '#343a40'}}>Dog Details</button>
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
            </div>
        </>
    )
}
export default ListDogs
