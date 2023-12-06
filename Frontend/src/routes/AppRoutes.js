import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";
import Signup from "../views/Signup";
import CustomersList from "../components/CustomersList";

const AppRoutes = (props) => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login setUser={props.setUser}/>} />
            <Route path="/customer/list" element={<CustomersList />} />
        </Routes>

    );
}

export default AppRoutes;
