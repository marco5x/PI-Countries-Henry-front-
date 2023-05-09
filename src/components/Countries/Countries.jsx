import React, { useState, useEffect } from 'react';
import style from './Countries.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Country from '../Country/Country'
import { getCountries } from '../../features/country/countrySlice'

function Countries() {
	const dispatch = useDispatch()
	const countriesDB = useSelector((state) => state.country.countries)

	const [numberPage, setnumberPage] = useState(1);
	const tenCountry = 10;
	const conteoFinal = numberPage * tenCountry;
	const conteoInicial = conteoFinal - tenCountry;

	const countries = countriesDB	//copia del array

	useEffect(() => {
		dispatch(getCountries())
	}, [])

	if (numberPage < 1) setnumberPage(25);
	if (numberPage > 25) setnumberPage(1);

	return (
		<>
		<div className={style.container}>
			{countries ? countries.slice(conteoInicial, conteoFinal).map(c =>
				<div>
					<Country
					    key={c.id}
						name={c.name}
						flag={!c.flag? "Cargando" : c.flag}
						region={c.region}
						id={c.id} />
				</div>) : (<h2>'The country does not exist 😱'</h2>)}
		</div>
			<div className={style.buttonPagination}>
				<div className={style.button}>
					<button onClick={() => setnumberPage(numberPage - 1)}> ◀ </button>
				</div>
				<div className={style.numberPage}>{numberPage} de 25</div>
				<div className={style.button}>
					<button onClick={() => setnumberPage(numberPage + 1)}> ▶ </button>
				</div>
			</div>
		</>
	)
}

export default Countries
