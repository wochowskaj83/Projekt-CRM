import axios from "axios";
import { useEffect, useState } from "react";
import './CustomersList.css';
import { Link } from "react-router-dom";



const CustomersList = (props) => {


    const [customers, setCustomers] = useState([]);

    const allCustomers = () => {

        axios
            .get("http://localhost:3005/customer/list")
            .then((res) => {
                setCustomers(res.data)
            })
            .catch((err) => {
                console.error(err);
            })

    };

    useEffect(() => {
        allCustomers();
    }, [])



    return (
        <>  <div>
            <form className="findCustomerForm">
                <textarea placeholder="Find customer..."></textarea>
                <button className="btn">Search</button>
                <Link to={`/customer/addcustomer`} className="btn">Add</Link>
            </form>
            </div>
            <div className="customers table">
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Address</th>
                            <th scope="col">Company</th>
                            <th scope="col">Name</th>
                            <th scope="col">Nip</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => {
                            // console.log(customers)
                            return (
                                <tr key={customer._id}>
                                    <td> {customer.address.street} {customer.address.zipcode} {customer.address.city} </td>
                                    <td>{customer.company}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.nip}</td>
                                    <td><Link to={`/customer/${customer._id}`} className="btn">Details</Link></td>
                                </tr>
                            );

                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CustomersList;