import React, {useEffect, useState} from 'react';
import {tableSource} from "../const";
import axios from "../axios";
import {redirect, useNavigate} from "react-router-dom";

function FamilyPage() {
    const [source, setSource] = useState([tableSource[0]]);
    const navigate = useNavigate();

    useEffect(() => {
        // TODO: update source
        axios.get("/family")
            .then(result => setSource(result.data)
            )
            .catch(e => {
                if(e.response.status === 403) {
                    // go to 권한 부족 error page
                    // return redirect('/error');
                    navigate("/error/403");
                } else {
                    // go to normal error page
                    // return redirect('/error');
                    navigate("/error/4xx");
                }
            })
    },[])

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
                return(<tr>
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