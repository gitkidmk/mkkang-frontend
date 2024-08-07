import React, {useEffect, useState} from 'react';
import {tableSource} from "../const";

function FamilyPage() {
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
                    <td><img alt={"profile"} src={source.image}/></td>
                    <td>{source.email}</td>
                    <td>{source.registrationId}</td>
                    <td>{source.role}</td>
                </tr>);
            })}
        </table>
    );
}

export default FamilyPage;