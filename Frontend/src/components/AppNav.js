import './AppNav.css'
import { useNavigate, Link } from 'react-router-dom';


const AppNav = (props) => {

    const navigate = useNavigate()

    const handleLogout = (e) => {
        e.preventDefault();
        
                    props.setUser(null);
                    localStorage.setItem('user', null);
                    navigate("/");
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
                {props.user && 
                (<li>
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