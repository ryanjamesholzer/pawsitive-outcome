import { useState } from "react";
import { useLogInMutation } from "../store/pawsitiveApi";
import { useNavigate } from "react-router-dom";
import SignUpFormModal from "./SignUpFormModal";

let initialData = {
    "username": "",
    "password": "",
}

const LoginForm = () =>{
    const navigate = useNavigate()
    const [logIn, result, error] = useLogInMutation()
    const [formData, setFormData] = useState(initialData);
    const [activeSignUpModal, setActiveSignUpModal] = useState(false)

    const activateSignUpFormModal =  () => {
        setActiveSignUpModal(true)
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await logIn(formData);

    }

    if (result.isSuccess) {
        result.isSuccess = false
        setTimeout(()=>{navigate('/dogs')},50)
    } else if (result.isError) {
        alert(result.error.data.detail)
    }

    return(
        <>
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>User Login</h1>
                    <form onSubmit={handleSubmit} id="create-location-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleChange} value={formData.name} placeholder="Username" required type="text" name="username" id="username" className="form-control" />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleChange} value={formData.password} placeholder="Password" required type="password" name="password" id="password" className="form-control" />
                            <label htmlFor="password">Password</label>
                        </div>
                        <button className="btn btn-primary" >Login</button>
                        <button onClick={activateSignUpFormModal} className="btn btn-primary">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
        <SignUpFormModal activeSignUpModal={activeSignUpModal} setActiveSignUpModal={setActiveSignUpModal} />
        </>
   );
}

export default LoginForm;
