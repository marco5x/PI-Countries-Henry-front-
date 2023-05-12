import React from 'react';
import style from './CountryDetail.module.css';
import { Link, useParams } from 'react-router-dom';
import { useGetCountryDetailQuery } from "../../api/apiSlice"


export const CountryDetail = () => {
    const params = useParams()    
    const {data: country, isLoading, error, isError, } = useGetCountryDetailQuery(params.id)  
    
	if (isError) return <div>Error: {error.message}</div>;
    return (
        <> {isLoading ? <div>Loading...</div> :
                <div className={style.fontContainer}>
                    <div >
                        <Link className={style.buttonLink} to='/countries'> GO HOME </Link>
                    </div>
                    <div className={style.detailContainer} >
                        <h1 key={country.id}>{country.name} ({country.id})</h1>
                        <figure >
                            <img src={country.flag} alt='img not found 😔' />
                        </figure>
                        <h2>Capital: {country.capital}</h2>
                        <h2>Region: {country.region}</h2>
                        <h2>Subregion: {country.subregion}</h2>
                        <h2>Population: {country.population}</h2>
                        <h2>Area: {country.area} km²</h2>
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