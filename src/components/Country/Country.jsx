import React from 'react';
import style from './Country.module.css'
import { NavLink } from 'react-router-dom'

const Country = ({ name, id, flag, region }) => {
    return (
        <div className={style.countryContainer}>
            <h2>{name}</h2>
            <NavLink to={`/countries/${id}`}>
                <div className={style.imgContainer}><img src={flag} alt='img not found' /></div>
            </NavLink>
            <h3>{region}</h3>
        </div>
    )
}

export default Country
