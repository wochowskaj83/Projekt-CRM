import axios from "axios";
import { useEffect, useState } from "react";
import './CustomerList.css';



const CustomersList = () => {
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
                <textarea placeholder="Find customer by id..."></textarea>
                <button className="btn">Search</button>
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
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => {
                            return (
                                <tr key={customer._id}>
                                    <td> {customer.address.street} {customer.address.zipcode} {customer.address.city} </td>
                                    <td>{customer.company}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.nip}</td>
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