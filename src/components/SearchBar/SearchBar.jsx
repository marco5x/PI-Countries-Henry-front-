import React, { useState } from 'react';
import style from './SearchBar.module.css'
import Country from '../Country/Country'
import { useGetCountryByNameQuery } from "../../api/apiSlice"

const SearchBar = () => {
	const [input, setInput] = useState({name: ''})

	const {data: countries, isLoading, error, isError, } = useGetCountryByNameQuery(input.name)

	function handleChange(e) {
		e.preventDefault()
		setInput({
			name: e.target.value
		})
	};

	if (isLoading) return <div>❌ Enter a name of a country</div>;  
	else if (isError) return <div>Error: {error.message}</div>;

	return (
		<>
			<form>
				<input className={style.input} type='text' placeholder='Search Country...' name='name'	value={input.name}	onChange={(e) => handleChange(e)}/>
				{/* <button type='submit' > 🔎 </button> */}
			</form>
			{!input.name ? "" : countries.map(c =>
				<div >
				<Country
					    key={c.id}
						name={c.name}
						flag={!c.flag? "not found image" : c.flag}
						region={c.region}
						id={c.id} />
				</div>
			) }
		</>
	)
}

export default SearchBar
