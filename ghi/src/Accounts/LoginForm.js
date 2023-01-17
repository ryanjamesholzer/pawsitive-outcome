import { useState } from "react";
import { useLogInMutation } from "../store/pawsitiveApi";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

let initialData = {
    "username": "",
    "password": "",
}

const LoginForm = () =>{
    const navigate = useNavigate()
    const [logIn, result] = useLogInMutation()
    const [formData, setFormData] = useState(initialData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await logIn(formData);
        navigate('/dogs')
    }

    if (result.isSuccess) {
        console.log('Login successful')
    } else if (result.isError) {
        console.log(result.error)
    }

    return(
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
                            <input onChange={handleChange} value={formData.password} placeholder="Password" required type="text" name="password" id="password" className="form-control" />
                            <label htmlFor="password">Password</label>
                        </div>
                        <button className="btn btn-primary" >Login</button>
                        <NavLink to='/signup'>
                            <button className="btn btn-primary">Sign Up</button>
                        </NavLink>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
