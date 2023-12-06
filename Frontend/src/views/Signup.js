import { useState } from 'react';
import './Signup.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [formData, setFormData] = useState({
        name:"",
        email: "",
        password: ""
    })

    const navigate = useNavigate()
    

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
            .post("http://localhost:3005/user/signup", {
                name: formData.name,
                email: formData.email,
                password: formData.password
            })
            .then((res) => {
                console.log(res.data)
                navigate("/login")

            })
            .catch((error) => {
                console.error(error);
            });
    }


    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="header">
                    <div className="text">Sign Up</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs"> 
                <div className="input">
                        <input type="name" name="name" placeholder="Username" onChange={handleInputChange} />
                    </div>
                    <div className="input">
                        <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
                    </div>
                    <div className="input">
                        <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
                    </div >
                </div >
                <div className="submit-container">
                    <button className="submit">Sign Up</button>
                </div>
            </form>
        </div >

    )
}

export default Signup;