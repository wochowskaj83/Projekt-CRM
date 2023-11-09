import { useState } from 'react';
import './Signup.css'
import axios from 'axios';

const Signup = () => {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })

    

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
                        <input type="text" name="name" placeholder="Name" onChange={handleInputChange} />
                    </div>
                    {/*  {errors.username && <p>{errors.username}</p>} */}
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