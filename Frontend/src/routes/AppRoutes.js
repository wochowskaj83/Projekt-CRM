import { Route, Routes} from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";
import Signup from "../views/Signup";
import CustomersList from "../components/CustomersList";
import CustomerDetails from "../components/CustomerDetails";
import AddCustomer from "../views/AddCustomer";
import AddAction from "../views/AddAction";
  

const AppRoutes = (props) => {
    return (
        <Routes>
            <Route path="/" element={<Home user={props.user}/>} />
            <Route path="/signup" element={<Signup user={props.user}/>} />
            <Route path="/login" element={<Login user={props.user} setUser={props.setUser}/>} />
            <Route path="/customer/list" element={<CustomersList />} />
            <Route path="/customer/:id" element={<CustomerDetails />} />
            <Route path="/customer/addcustomer" element={<AddCustomer />} />
            <Route path="/customer/:id/add" element={<AddAction />} />
        </Routes>

    );
}

export default AppRoutes;
