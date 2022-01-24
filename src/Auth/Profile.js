import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const navigate = useNavigate();
    const loggingOut = () => {
        window.localStorage.clear();
        navigate('/login_signup');
    }
    return (
        <div>
            <h1 style={{padding:5 , margin: 6}}>Welcome to Profile Page</h1>
            <button style={{backgroundColor: "black" ,color: "white", padding: 5, margin: 9}} onClick={loggingOut} className='logout'>Log Out</button>
        </div>
    )
}
