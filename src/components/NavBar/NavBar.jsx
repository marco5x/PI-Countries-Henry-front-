import React from 'react'
import style from './NavBar.module.css'
import {Link, NavLink} from 'react-router-dom'

export const NavBar = () => {
    return(
        <div className={style.navContainer}>  
        <div>
            <Link to='/'><img src='https://www.szkolneblogi.pl/static/media/users/private/SPmarzecice/eko5.gif' alt='' className={style.img}/></Link>
        </div>  
            <h1> APP COUNTRIES - </h1>
            <h3>"Let's take care of our home 🏠 , called Earth 🌎."</h3> 
            <div>
            <NavLink className={style.buttonLink} to='/activities/all' >Activities</NavLink>
            <NavLink className={style.buttonLink} to='/activities' >Create Activity</NavLink>
            </div>           
        </div>
    )
}
