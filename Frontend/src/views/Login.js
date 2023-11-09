import './Login.css'
import { useState } from 'react'
import axios from "axios";

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });


    const handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;
      
        setFormData({
            ...formData,
            [name]: target.value,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios
        .post("http://localhost:3005/user/login", {
            email: formData.email,
            password: formData.password
        })
        .then((res) => {
            console.log(res.data)
            
        })
        .catch((error)=> {
            console.error(error);
        });
    }


    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="header">
                    <div className="text">Login</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleInputChange} />
                    </div>
                    <div className="input">
                        <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleInputChange} />
                    </div >
                </div >
                <div className="submit-container">
                    <button className="submit">Login</button>
                </div>
            </form>
        </div >

    )
}

export default Login;