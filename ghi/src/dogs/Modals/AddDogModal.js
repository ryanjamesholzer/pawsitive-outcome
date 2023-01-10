import { React, useState } from 'react'
import Modal from 'react-bootstrap/Modal'

function AddDog ({activeAddModal, setActiveAddModal}) {
    const initialState = {
        name: '',
        gender: '',
        breed: '',
        age: '',
        size: '',
        picture_url: '',
        notes: ''
    }

    const [details, setDetails] = useState(initialState)


    const handleChange = (e) => {
        const {name, value} = e.target
        setDetails((prev) => {
            return {...prev, [name]: value}
        })
    }

    function handleClose() {
        setActiveAddModal(false)
    }

    const handleSubmit = (e) => {
        return -1
    }

    return (
        <Modal show={activeAddModal} onHide={handleClose}>
            <Modal.Body>
                <form onSubmit={handleSubmit} id="create-conference-form">
                <div className="form-floating mb-3">
                    <input onChange={handleChange} placeholder="name"
                    required type="text" name="name" id="name" className="form-control" />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleChange} placeholder="gender" maxLength="17"
                    required type="text" name="gender" id="gender" className="form-control" />
                    <label htmlFor="gender">Gender</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleChange} placeholder="breed"
                    required type="text" name="breed" id="breed" className="form-control" />
                    <label htmlFor="breed">Breed</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleChange} placeholder="age"
                    required type="text" name="age" id="age" className="form-control" />
                    <label htmlFor="age">Age</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleChange} placeholder="size"
                    required name="size" id="size" className="form-control" />
                    <label htmlFor="size">Size</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleChange} placeholder="picture_url"
                    required name="picture_url" id="picture_url" className="form-control" />
                    <label htmlFor="picture_url">Picture URL</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea onChange={handleChange} placeholder="notes" style={{height: "100px"}}
                    required name="notes" id="notes" className="form-control" />
                    <label htmlFor="notes">Notes</label>
                </div>
                <button className="btn btn-primary">Create</button>
            </form>
            </Modal.Body>
        </Modal>
    )
}
export default AddDog