import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <nav className='navBar'>
            <Link to="/">Task List</Link>
        </nav>
    );
};

export default Navbar;
