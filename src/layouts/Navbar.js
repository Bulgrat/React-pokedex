import React from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../auth';

export default function Navbar() {
    const { currentUser } = React.useContext(UserContext);

    return (
        <nav className='navbar fixed-top navbar-light bg-light'>
            <div className="container">
                <Link to='/' className='navbar-brand'>Meus pokemon</Link>
                <ul className='navbar-nav me-auto flex-row'>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/lista">Lista</Link>
                    </li>
                </ul>
            </div>
        </nav>);
}