import { Link, useParams } from 'react-router-dom';
import './CustomerDetails.css';
import axios from 'axios';
import { useEffect, useState } from 'react';




const CustomerDetails = (props) => {

    const { id } = useParams()

  
    const [clientDetails, setClientDetails] = useState([])
    const [clientActions, setClientActions] = useState([])

    const getActions = () => {
        axios
            .get(`http://localhost:3005/actions/${id}/actions`)
            .then((res) => {
                setClientActions(res.data)
            })
    }

    const getDetails = () => {
        axios
            .get(`http://localhost:3005/customer/id/${id}`)
            .then((res) => {
                setClientDetails(res.data)
            })
    }

    useEffect(() => {
        getActions();
        getDetails();

    }, [])

    return (
        <>
            <div className="customer">
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Address</th>
                            <th scope="col">Company</th>
                            <th scope="col">Name </th>
                            <th scope="col">Nip</th>

                        </tr>
                    </thead>
                    <tbody>
                        {clientDetails.map((clientDetail) => {
                            // console.log(clientDetail)
                            return (
                                <tr key={`${id}`}>
                                    <td>{clientDetail.address.street} {clientDetail.address.zipcode} {clientDetail.address.city} </td>
                                    <td>{clientDetail.company}</td>
                                    <td>{clientDetail.name}</td>
                                    <td>{clientDetail.nip}</td>
                                </tr>
                            );

                        })}
                    </tbody>
                </table>
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Action type</th>
                            <th scope="col">Date</th>
                            <th scope="col">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientActions.map((clientAction) => {
                            // console.log(clientActions)
                            return (
                                <tr key={`${id}`}>
                                    <td>{clientAction.type}</td>
                                    <td>{clientAction.date}</td>
                                    <td>{clientAction.description}</td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
                <button><Link to={`/customer/${id}/add`} className="btn">Add</Link></button>
            </div>
        </>
    )
}


export default CustomerDetails;