import './AppNav.css'
import { Link } from 'react-router-dom';

const AppNav = (props) => {

    const logout = () => {
        props.setUser(null)
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
                    <Link to="/" onClick={logout}>Logout</Link>
                </li>)}
            </ul>
        </nav>
    );
}

export default AppNav;