import { useState } from "react";

let initialData = {
    "username": "",
    "password": "",
}

const LoginForm = ({token, login}) =>{
    const [formData, setFormData] = useState(initialData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(formData.username, formData.password);

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
                        <button  className="btn btn-primary" >Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
