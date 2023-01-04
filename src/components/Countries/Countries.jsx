import React, { useState, useEffect } from 'react';
import style from './Countries.module.css';
import { connect } from 'react-redux';
import Country from '../Country/Country'
//import { getCountries } from '../../Actions/index'

function Countries(props) {
	const [numberPage, setnumberPage] = useState(1);
	const tenCountry = 10;
	const conteoFinal = numberPage * tenCountry;
	const conteoInicial = conteoFinal - tenCountry;

	const countries = props.countries.slice(conteoInicial, conteoFinal)	//copia del array

	useEffect(() => {
		// props.getCountries()
	}, [])
	if (numberPage < 1) setnumberPage(1);
	if (numberPage > 25) setnumberPage(25);

	return (
		<>
		<div className={style.container}>
			{countries ? countries.map(c =>
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


function mapStateToProps(state) {
	return {
		countries: state.countries
	}
}

function mapDispatchToProps(dispatch) {
	return {
		// getCountries: () => dispatch(getCountries()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (Countries)
