import React, { useState } from 'react';
import style from './SearchBar.module.css'
import { connect } from 'react-redux';////////////////
import { searchCountry } from '../../Actions/index'/////OOOjjjjJo


const SearchBar = (props) => {
	const [input, setInput] = useState({name: ''})

	function handleChange(e) {
		e.preventDefault()	
		setInput({
			name: e.target.value
		})
	};

	function handleSubmit(e) {
		e.preventDefault()
		if (input.name) {
			props.searchCountry(input.name)
		} else if (!input.name){
			alert('❌ Enter a name of a country')
		} 
		setInput({name:''})
	}

	return (
		<div >
			<form onSubmit={(e) => handleSubmit(e)}>
				<input className={style.input} type='text' placeholder='Search Country...' name='name'	value={input.name}	onChange={(e) => handleChange(e)}/>
				{/* <button type='submit' > 🔎 </button> */}
			</form>
		</div>
	)
}

function mapDispatchToProps(dispatch) {
	return {
		searchCountry: name => dispatch(searchCountry(name))
	};
}

export default connect(null, mapDispatchToProps)(SearchBar)
