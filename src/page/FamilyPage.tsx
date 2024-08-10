import React, {useEffect, useState} from 'react';
import axios from "../axios";
import {useNavigate} from "react-router-dom";
import {tableSource} from "../const";

function FamilyPage() {
    const [source, setSource] = useState([tableSource[0]]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // TODO: update source
        axios.get("/family")
            .then(result => setSource(result.data)
            )
            .catch(e => {
                if(e.response.status === 403) {
                    navigate("/error/403");
                } else {
                    navigate("/error/500");
                }
            })
            .finally(() =>
                setLoading(false))
    },[])

    if(loading) {
        return <></>
    }

    return (
        <table>
            <tr>
                <th>Number</th>
                <th>Image</th>
                <th>Email</th>
                <th>RegId</th>
                <th>Role</th>
            </tr>
            {source.map((source, index) => {
                return(
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td><img alt={"profile"} src={source.profile}/></td>
                    <td>{source.email}</td>
                    <td>{source.registrationId}</td>
                    <td>{source.role}</td>
                </tr>);
            })}
        </table>
    );
}

export default FamilyPage;