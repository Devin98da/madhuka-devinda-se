import React, {  } from 'react'
import { Link } from 'react-router-dom'
import classes from './Dropdown.module.css';

const Dropdown = ({projects, OnClickDropDown}) => {

    const handleClickDropDown = () =>{
            OnClickDropDown();
        
    }

    const dropdowns = projects.map((p) => {
        return (
            <ul key={p.id}>
                <Link key={p.id} to={`/projects/${p.title}`} onClick={handleClickDropDown}>{p.title}</Link>
            </ul>
        )
    })

    return (
        <div className={classes.dropdown_container}>
            {dropdowns}

        </div>
    )
}

export default Dropdown