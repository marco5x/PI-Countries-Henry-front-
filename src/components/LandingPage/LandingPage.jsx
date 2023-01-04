import React from 'react'
import style from './LandingPage.module.css'
import { Link } from 'react-router-dom'

export const LandingPage = () => {
    return (
        <div className={style.landingContainer}>
            <div className={style.msgContainer}>
                    <h1>PI - Countries</h1>
                    <hr />
                    <p className={style.msg}>
                        HI, WELCOME 👋🏼. This is a page to create dreams (activities) of tourist trips,
                        in different countries of the world
                    </p>
                    <div>
                        <Link to='/countries'><button className={style.button}>Enter</button></Link>
                    </div>
            </div>
        </div>
    )
}
