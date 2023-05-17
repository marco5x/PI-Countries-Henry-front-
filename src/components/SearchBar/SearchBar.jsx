import React, { useState } from 'react';
import style from './SearchBar.module.css'
import Country from '../Country/Country'
import { useGetCountryByNameQuery } from "../../api/apiSlice"

const SearchBar = () => {
	const [input, setInput] = useState({name: ''})

	const {data: countries, isLoading, isError, } = useGetCountryByNameQuery(input.name)

	const handleChange = (e) => {
		e.preventDefault()
		setInput({
			name: e.target.value
		})
	};

	if (isLoading) return "Search" ;  
	else if (isError) return ;

	return (
		<>
			<form>
				<input className={style.input} type='text' placeholder='Search Country...' name='name'	value={input.name}	onChange={(e) => handleChange(e)}/>
				{/* <button type='submit' > 🔎 </button> */}
			</form>
			{!input.name ? "" : countries.map(c =>
				<div>
				<Country
					    key={c.id}
						name={c.name}
						flag={!c.flag? "not found image" : c.flag}
						region={c.region}
						id={c.id} />
						{!c? <div>Pais n encontrado</div>:"" }
				</div>
				
			)}
		</>
	)
}

export default SearchBar
