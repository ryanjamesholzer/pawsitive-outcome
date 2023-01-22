import { React, useState, useCallback } from 'react'
import { useGetAdoptionsQuery } from '../store/pawsitiveApi'
import AdoptionDetailModal from './Modals/AdoptionDetailModal'

function ListAdoptions() {
    const {data, isLoading} = useGetAdoptionsQuery()
    const [activeAdoptionDetailModal, setActiveAdoptionDetailModal] = useState(false)
    const [adoptionId, setAdoptionId] = useState(null)
    const [dogId, setDogId] = useState(null)
    const [query, setQuery] = useState("")

    const activateAdoptionDetailModal = useCallback((adoption_id, dog_id) => () => {
        setAdoptionId(adoption_id)
        setDogId(dog_id)
        setActiveAdoptionDetailModal(true)
    }, [])

    if (isLoading) {
        return (
            <progress className='progress is-primary' max='100'></progress>
        )
    }

    return (
        <>
            {data.adoptions &&
                <div>
                    {/* <ErrorNotification error={error} /> */}
                    <div className='d-flex my-3'>
                        <input className='my-3 p-2 flex-grow-1 fs-3 fw-bold border border-dark border-3 rounded' placeholder=" 🔍 Search for dog" onChange={event => setQuery(event.target.value)} />
                    </div>
                    <table className="table table-striped m-2" style={{backgroundColor: '#fff1ab'}}>
                        <thead>
                            <tr>
                                <th className="fs-4" scope="col">Dog Name</th>
                                <th className="fs-4" scope="col">Adopter Name</th>
                                <th className="fs-4" scope="col">Date of Adoption</th>
                                <th className="fs-4" scope="col">More Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.adoptions.map(adoption => {
                                if(adoption.dog.name.toLowerCase().includes(query.toLowerCase()) || query === '') {
                                    return (
                                        <tr key={adoption.id}>
                                            <td className="fw-bold fs-5">{adoption.dog.name}</td>
                                            <td className="fw-bold fs-5">{adoption.adopter_name}</td>
                                            <td className="fw-bold fs-5">{adoption.date_of_adoption}</td>
                                            <td>
                                                <button className="btn fw-bolder fs-6 border border-dark border-2 rounded" style={{backgroundColor: '#87c4f2', color: '#343a40'}} onClick={activateAdoptionDetailModal(adoption.id, adoption.dog.dog_id)}>Adoption Deets</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            })}
                        </tbody>
                    </table>
                </div>
            }
            <AdoptionDetailModal activeAdoptionDetailModal={activeAdoptionDetailModal} setActiveAdoptionDetailModal={setActiveAdoptionDetailModal} adoptionId={adoptionId} dogId={dogId}/>
        </>
    )

}
export default ListAdoptions
