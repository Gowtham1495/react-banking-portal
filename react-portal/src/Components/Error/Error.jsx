import React from 'react';


export default function CustomError(props) {
    var errorStyle = {
        color: '#e63900',
        textDecoration: 'none',
        justifyContent: 'center',
        textAlign: 'center',
        paddingBottom: '50px'
    }

    return (

        <div style={errorStyle}>
            {props.message ? props.message : 'System is not available right now, please try again later.'}
        </div>
    )
}