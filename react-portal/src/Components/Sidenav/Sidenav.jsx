import React from 'react';
import { NavLink } from 'react-router-dom'
var SessionStorageUtil = require('../../Utils/SessionStorageUtil')


export default function Sidenav(props) {
    var userName = SessionStorageUtil.getItemFromSession('userLoggedIn');
    return (
        <aside className="sidenav">
            <ul className="sidenav__list">
                <li className="sidenav__list-item">
                    <NavLink style={{ textDecoration: 'none', color: 'White' }}
                        to={{
                            pathname: "/dashboard",
                            state: { userName: userName }
                        }}>Dashboard
                </NavLink>
                </li>
                <li className="sidenav__list-item">
                    <NavLink style={{ textDecoration: 'none', color: 'White' }}
                        to={{
                            pathname: "/accounts",
                            state: { userName: userName }
                        }}>Accounts
                    </NavLink>
                </li>
                <li className="sidenav__list-item">
                    <NavLink style={{ textDecoration: 'none', color: 'White' }}
                        to={{
                            pathname: "/transfers",
                            state: { userName: userName }
                        }}>Transfers
                </NavLink>
                </li>
                <li className="sidenav__list-item">
                    <NavLink style={{ textDecoration: 'none', color: 'White' }}
                        to={{
                            pathname: "/locations",
                            state: { userName: userName }
                        }}>Locations
                    </NavLink>
                </li>
            </ul>
        </aside>
    )
}
