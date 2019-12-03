import React from 'react';
import CustomButton from '../Button/CustomButton'


export default function Header(props) {
    return (
        < header className="header" >
            <div className="userDetail">Hello {props.userName}</div>
            <CustomButton onClick={props.onClick} color={'white'}>Logout</CustomButton>            
        </header >
    )
}
