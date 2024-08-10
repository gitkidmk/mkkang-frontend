import React, {useEffect, useState} from 'react';
import {tableSource} from "../const";
import {useNavigate} from "react-router-dom";
import axios from "../axios";

function AdminPage() {
    const [source, setSource] = useState([tableSource[0]]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // TODO: update source
        axios.get("/admin")
            .then(response => setSource(response.data)
            )
            .catch(e => {
                if(e.response.status === 403) {
                    navigate("/error/403");
                } else {
                    navigate("/error/4xx");
                }
            })
            .finally(() =>
                setLoading(false))
    },[])

    // () => {} 로 반환하지 않고 바로 메소드 이름으로 반환 가능
    const selectRole = (e: { preventDefault: () => void; target: any; }) => {
        // Prevent the browser from reloading the page
        e.preventDefault();
        // Read the form data
        const target = e.target;
        const role = target.value;

        axios.post("/admin/role", {
            "email": target.id,
            "role": role
        })
            .then(response =>
            console.log(response))
            .catch(e => navigate("/error"));
    }

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
                    <td>
                        <select name="languages"
                                id={source.email}
                                defaultValue={source.role}
                                onChange={selectRole}>
                            <option value="ANYONE">ANYONE</option>
                            <option value="FAMILY">FAMILY</option>
                            <option value="ADMIN">ADMIN</option>
                        </select>
                    </td>
                </tr>);
            })}
        </table>
    );
}

export default AdminPage;