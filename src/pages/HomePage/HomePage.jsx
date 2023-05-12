import React from 'react';
import style from './HomePage.module.css';
import Countries from '../../components/Countries/Countries';
import SearchBar from "../../components/SearchBar/SearchBar"
//import Ordered from '../Ordered/Ordered';
//import Filter from '../Filter/Filter';

export const HomePage = () => {
    return (
        <div className={style.homeContainer}>
            <SearchBar />
            {/* <Filter /> */}
            {/* <Ordered /> */}
            <Countries />
        </div>
    )
}
