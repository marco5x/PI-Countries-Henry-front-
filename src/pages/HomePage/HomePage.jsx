import React from 'react';
import style from './HomePage.module.css';
import Countries from '../../components/Countries/Countries';
import SearchBar from "../../components/SearchBar/SearchBar"
import Ordered from '../../components/Ordered/Ordered';

export const HomePage = () => {
    return (
        <div className={style.homeContainer}>
            <SearchBar />
            <Ordered />
            <Countries />
        </div>
    )
}
