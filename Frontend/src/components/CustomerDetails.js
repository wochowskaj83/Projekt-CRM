import { Link, useParams } from 'react-router-dom';
import './CustomerDetails.css';
import axios from 'axios';
import { useEffect, useState } from 'react';




const CustomerDetails = (props) => {

    const { id } = useParams()


    const [clientDetails, setClientDetails] = useState({})
    const [clientActions, setClientActions] = useState([])

    const getActions = () => {
        axios
            .get(`http://localhost:3005/actions/${id}/actions`)
            .then((res) => {
                setClientActions(res.data)
                console.log(res.data)
            })
    }

    const getDetails = () => {
        axios
            .get(`http://localhost:3005/customer/id/${id}`)
            .then((res) => {
                setClientDetails(res.data)
                console.log(res.data)

            })
    }

    useEffect(() => {
        getDetails();
        getActions();
        console.log(clientDetails)
    }, [])

    console.log(clientDetails)
    return (
        <>
            <div className="customer">
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Address</th>
                            <th scope="col">Company</th>
                            <th scope="col">Name </th>
                            <th scope="col">Nip</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{id}</td>
                          <td>{clientDetails.city}</td>
                          <td>{clientDetails.company}</td>
                          <td>{clientDetails.name}</td>
                          <td>{clientDetails.nip}</td>
                        </tr>
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
                                <tr key={id}>
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