import React, { useEffect, useState } from "react";
import style from "./Ordered.module.css";
import { connect } from "react-redux";
import {
    getCountries,
    sortAToZ,
    sortZToA,
    sortPopulationAsc,
    sortPopulationDesc,
} from "../../Actions/index";////Ojjjooooo

const Ordered = ({
    getCountries,
    sortAToZ,
    sortZToA,
    sortPopulationAsc,
    sortPopulationDesc,
}) => {
    const [order, setOrder] = useState("");

    useEffect(() => {
        if (order === "all") getCountries();
        else if (order === "a-z") sortAToZ();
        else if (order === "z-a") sortZToA();
        else if (order === "populationAsc") sortPopulationAsc();
        else if (order === "populationDesc") sortPopulationDesc();
    }, [order]);

    return (
        <div>
            <h5>Order by</h5>
            <select
                className={style.selectOrder}
                onChange={(e) => setOrder(e.target.value)}
            >
                <option value="all">🌐 All Countries</option>
                <option value="a-z">A...z</option>
                <option value="z-a">Z...a</option>
                <option value="populationAsc">👆🏼 Population</option>
                <option value="populationDesc">👇🏼 Population</option>
            </select>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCountries: () => dispatch(getCountries()),
        sortAToZ: () => dispatch(sortAToZ()),
        sortZToA: () => dispatch(sortZToA()),
        sortPopulationAsc: () => dispatch(sortPopulationAsc()),
        sortPopulationDesc: () => dispatch(sortPopulationDesc()),
    };
};
const mapStateToProps = (state) => {
    return {
        countries: state.countries,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ordered);
