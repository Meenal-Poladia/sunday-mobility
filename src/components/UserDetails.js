import React from 'react';
import "./UserDetails.css";

const UserDetails = () => {

    return (
        <div className="email-list">
            <h3>Email ID of Users</h3>
            <div>
                {
                    Object.entries(localStorage).map((item) => {
                        return <p key={item[0]}>{item[0]}</p>
                    })
                }
            </div>
        </div>
    )

}

export default UserDetails;