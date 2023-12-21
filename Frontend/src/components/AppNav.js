import axios from 'axios';
import './AppNav.css'
import { Link } from 'react-router-dom';


const AppNav = (props) => {

    const handleLogout = (e) => {
        e.preventDefault();

        axios
            .post("https://localhost:3005/")
            .then((res) => {
                if (res.data.message) {
                    props.setUser(null);
                    localStorage.setItem('user', null);
                }
            })
            .catch((error) => {
                props.setUser(null);
                localStorage.setItem('user', null);
                console.error(error);
            });
    }

    return (
        <nav className="mainNav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {!props.user && (<li>
                    <Link to="/signup">Signup</Link>
                </li>)}
                {!props.user && (<li>
                    <Link to="/login">Login</Link>
                </li>)}
                {props.user && (<li>
                    <Link to="/" onClick={handleLogout}>Logout</Link>
                </li>)}
                {props.user && (<li>
                    <Link to="/customer/list" >Customers</Link>
                </li>)}
            </ul>
        </nav>
    );
}

export default AppNav;