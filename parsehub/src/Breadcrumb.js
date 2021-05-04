import React from 'react';
import './breadcrumb.css';

function Breadcrumb({name, children, type, setCurrentDir}){

    const changeDir = (e) => {
        console.log(e);
        setCurrentDir(e.target.innerText);
    }

    const listItems = 
        children.map(entry => (
            <button onClick={changeDir}><li className="breadcrumbsListItems" key={Math.random()}>{entry}</li></button>
    ));
    
    return(
        <div className="breadcrumbs">
            <h3>{(type === "file" ? `THIS IS A FILE: ${name}` : name)}</h3>
            <ul className="breadcrumbsList">
                {listItems}
            </ul>
        </div>
    );
}

export default Breadcrumb;