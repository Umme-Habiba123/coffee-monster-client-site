import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    const links = <>
        <Link to={`coffee/:id`}> <li><a >Coffee Details</a></li></Link>
        <Link to={'updateCoffee/:id'}> <li><a>Update Coffee</a></li></Link>
        <Link to={'AddCoffee'}> <li><a>Add Coffee </a></li></Link>
    </>
    return (
        <div>

            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to={'/'}>
                        <p className="btn btn-ghost text-xl dancing-script-font text-4xl">Coffee with Mahi</p></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">LogIn</a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;