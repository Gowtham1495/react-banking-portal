import React from 'react';


export default function Header(props) {
    return (
        < header className="header" >
            <div className="userDetail">Hello {props.userName}</div>
            <button className="formButton" onClick={props.onClick}>Logout</button>
        </header >
    )
}
