/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css';
import backgroundImage from './back.jpg'; 

const Firstpage = () => {
    return (
        <div className='main' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="left-container">
                <h1>NOTES</h1>
                <div className="button-container">
                    <Link to="login">
                        <button>Login</button>
                    </Link>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Firstpage;
