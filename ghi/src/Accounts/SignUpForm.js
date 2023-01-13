import { useState } from "react";
import { useSignUpMutation } from "../store/authApi";
import { useNavigate } from "react-router-dom";

let initialData = {
    "username": "",
    "password": "",
    "full_name": "",
}

const SignUpForm = () =>{
    const navigate = useNavigate();
    const [signUp, result] = useSignUpMutation();
    const [formData, setFormData] = useState(initialData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signUp(formData);
        navigate('/dogs')
    }

    if (result.isSuccess) {
        console.log('Signup successful')
    } else if (result.isError) {
        console.log(result.error)
    }

    return(
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Sign Up</h1>
                    <form onSubmit={handleSubmit} id="create-location-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleChange} value={formData.name} placeholder="Username" required type="text" name="username" id="username" className="form-control" />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleChange} value={formData.password} placeholder="Password" required type="text" name="password" id="password" className="form-control" />
                            <label htmlFor="password">Password</label>
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
    );
}

export default SignUpForm;
