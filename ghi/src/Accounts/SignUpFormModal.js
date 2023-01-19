import { useState } from "react"
import { useSignUpMutation } from "../store/pawsitiveApi"
import { useNavigate } from "react-router-dom"
import Modal from 'react-bootstrap/Modal'

let initialData = {
    "username": "",
    "password": "",
    "full_name": "",
}

const SignUpFormModal = ({activeSignUpModal, setActiveSignUpModal}) =>{
    const navigate = useNavigate()
    const [signUp, result] = useSignUpMutation()
    const [formData, setFormData] = useState(initialData)
    const [passConfirm, setPassConfirm] = useState('')

    function handleClose() {
        setActiveSignUpModal(false)
    }

    const handleChange = (e) => {
        setFormData({...formData,
            [e.target.name]:e.target.value
        })
    }

    const passConfirmChange = (e) => {
        setPassConfirm(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (formData.password === passConfirm) {
            await signUp(formData)
            setFormData(initialData)
        } else {
            alert('Password does not match confirmation.')
        }
    }

    if (result.isSuccess) {
        result.isSuccess = false
        setTimeout(handleClose, 500)
        navigate('/dogs')
    } else if (result.isError){
        alert(result.error.data.detail)
    }
    return(
        <Modal show={activeSignUpModal} onHide={handleClose}>
            <Modal.Body>
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4">
                            <h1>Sign Up</h1>
                            <form onSubmit={handleSubmit} id="signUp-formModal">
                                <div className="form-floating mb-3">
                                    <input onChange={handleChange} value={formData.name} placeholder="Username" required type="text" name="username" id="signUsername" className="form-control" />
                                    <label htmlFor="username">Username</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={handleChange} value={formData.password} placeholder="Password" required type="password" name="password" id="signPassword" className="form-control" autoComplete="on" />
                                    <label htmlFor="password" >Password</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={passConfirmChange} placeholder="passwordConfirmation" required type="password" name="passwordConfirmation" id="passwordConfirmation" className="form-control" autoComplete="on" />
                                    <label htmlFor="passwordConfirmation">Password Confirmation</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={handleChange} value={formData.full_name} placeholder="Full Name" required type="text" name="full_name" id="full_name" className="form-control" />
                                    <label htmlFor="full_name">Full Name</label>
                                </div>
                                <button  className="btn btn-primary">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default SignUpFormModal;
