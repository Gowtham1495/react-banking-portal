import React from 'react';
import { NavLink } from 'react-router-dom'


export default function Sidenav(props) {
    return (
        <aside className="sidenav">
            <ul className="sidenav__list">
                <li className="sidenav__list-item">
                    <NavLink style={{ textDecoration: 'none', color: 'White' }}
                        to={{
                            pathname: "/dashboard",
                            state: { userName: 'Gowtham' }
                        }}>Dashboard
                </NavLink>
                </li>
                <li className="sidenav__list-item">
                    <NavLink style={{ textDecoration: 'none', color: 'White' }}
                        to={{
                            pathname: "/accounts",
                            state: { userName: 'Gowtham' }
                        }}>Accounts
                    </NavLink>
                </li>
                <li className="sidenav__list-item">
                    <NavLink style={{ textDecoration: 'none', color: 'White' }}
                        to={{
                            pathname: "/transfers",
                            state: { userName: 'Gowtham' }
                        }}>Transfers
                </NavLink>
                </li>
                <li className="sidenav__list-item">
                    <NavLink style={{ textDecoration: 'none', color: 'White' }}
                        to={{
                            pathname: "/locations",
                            state: { userName: 'Gowtham' }
                        }}>Locations
                    </NavLink>
                </li>
            </ul>
        </aside>
    )
}
