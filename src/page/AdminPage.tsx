import React, {useEffect, useState} from 'react';
import {tableSource} from "../const";

function AdminPage() {
    return (
        <table>
            <tr>
                <th>Number</th>
                <th>Image</th>
                <th>Email</th>
                <th>RegId</th>
                <th>Role</th>
            </tr>
            {tableSource.map((source, index) => {
                return(<tr>
                    <td>{index + 1}</td>
                    <td><img alt={"profile"} src={source.profile}/></td>
                    <td>{source.email}</td>
                    <td>{source.registrationId}</td>
                    <td>
                        <form action="#">
                            <select name="languages" id="lang" defaultValue={source.role}>
                                <option value="ROLE_ANY">ANY</option>
                                <option value="ROLE_FAMILY">FAMILY</option>
                                <option value="ROLE_ADMIN">ADMIN</option>
                            </select>
                        </form>
                    </td>
                </tr>);
            })}
        </table>
    );
}

export default AdminPage;