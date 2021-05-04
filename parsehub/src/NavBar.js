import React from 'react';
import './navbar.css'

function NavBar(props){
    return(
        <div className="navbar">
            <p>{props.name}</p>
            <p>{props.last}</p>
        </div>
    );
}

export default NavBar