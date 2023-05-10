import React, { useEffect, useState } from 'react';
import style from './CountryDetail.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { countryDetail } from '../../features/country/countrySlice';

export const CountryDetail = ({ id }) => {
    const dispatch = useDispatch()
    const params = useParams()
    const country = useSelector((state) => state.country)
   
    const [state, setState] = useState(false)

    useEffect(() => {
        dispatch(countryDetail(id))
        setState(true)
    }, [])

    const countrie = country

    return (
        <> {!state ? <div>Loading...</div> :
            Object.keys(country).length === 0 ? <div>Loading...</div> ://devuelve un array cuyos elementos son strings correspondientes a las propiedades enumerables que se encuentran directamente en el object
                <div className={style.fontContainer}>
                    <div >
                        <Link className={style.buttonLink} to='/countries'> GO HOME </Link>
                    </div>
                    <div className={style.detailContainer} >
                    {console.log(countrie)}
                        <h1 key={countrie.id}>{countrie.name} ({countrie.id})</h1>
                        <figure >
                            <img src={countrie.flag} alt='img not found 😔' />
                        </figure>
                        <h2>Capital: {countrie.capital}</h2>
                        <h2>Region: {countrie.region}</h2>
                        <h2>Subregion: {countrie.subregion}</h2>
                        <h2>Population: {countrie.population}</h2>
                        <h2>Area: {countrie.area} km²</h2>
                    </div>
                    <div className={style.detailContainer}>
                        <h1>Dreams of tourist activities</h1>
                        <hr />
                        {!country.activities ? <p>There are no tourist dreams in this country</p> :
                        <div> <ul>
                                {country.activities.map((actTour) => (
                                    <li key={actTour.name}>
                                        {actTour.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        }
                    </div>
                </div>
            }
        </>
    )
}