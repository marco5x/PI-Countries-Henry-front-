import React, { useEffect, useState } from "react";
import style from "./FormActivity.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import { getCountries, postAct } from "../../Actions/index"; ///OJOOOOOO

export const FormActivity = () => {
    const countries = useSelector((state) => state.countries);
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getCountries());
    }, [dispatch]);

    const [submit, setSubmit] = useState(false);
    const [activities, setActivities] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countryId: [],
    });

    const handleActivity = (e) => {
        setSubmit(false);
        if (e.target.name !== "countryId" && e.target.name !== "difficulty") {
            setActivities({
                ...activities,
                [e.target.name]: e.target.value,
            });
        } else if (e.target.name === "difficulty") {
            //console.log(activities.difficulty)
            setActivities({
                ...activities,
                [e.target.name]: e.target.value,
            });
        } else {
            setActivities({
                ...activities,
                countryId: Array.from(
                    e.target.selectedOptions,
                    (option) => option.value
                ), //crea una nueva instancia de ‎‎Array‎‎ copiada superficialmente a partir de un objeto similar a una matriz o iterable.‎
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        // dispatch(postAct(activities));
        alert("✅ Activity Created");
        setActivities({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countryId: [],
        });
    };

    return (
        <div className={style.container}>
            <div>
                <Link className={style.buttonLink} to="/countries">
                    {" "}GO HOME{" "}
                </Link>
            </div>
            <div>
                <form className={style.form} onSubmit={handleSubmit}>
                    <h2>Create a new activity</h2>
                    <br />
                    <div>
                        <div>
                            <input
                                className={style.input}
                                required
                                autoComplete="off"
                                placeholder="Name activity..."
                                name="name"
                                onChange={handleActivity}
                                value={activities.name}
                            />
                        </div>
                        <div>
                            <input
                                className={style.input}
                                required
                                autoComplete="off"
                                placeholder="Duration (in hours)"
                                name="duration"
                                onChange={handleActivity}
                                value={activities.duration}
                            />
                        </div>
                        <select className={style.select} name="difficulty" onChange={handleActivity}>
                            <option>Difficulty level</option>
                            <option value="1">1 ⚪</option>
                            <option value="2">2 🟢</option>
                            <option value="3">3 🟡</option>
                            <option value="4">4 🟠</option>
                            <option value="5">5 🔴</option>
                        </select>
                        <select className={style.select} name="season" onChange={handleActivity}>
                            <option>Seasson...</option>
                            <option className={style.op} value="Summer">
                                Summer 🌞
                            </option>
                            <option value="Autumn">Autumn 🍁 </option>
                            <option value="Winter">Winter ❄ </option>
                            <option value="Spring">Spring 🌼</option>
                        </select>
                    </div>
                    <select
                        required
                        className={style.multiSelect}
                        onChange={handleActivity}
                        name="countryId"
                        id="countries"
                        multiple
                    >
                        {countries?.map((countryId) => {
                            return (
                                <option key={countryId.id} value={countryId.id}>
                                    {countryId.name}
                                </option>
                            );
                        })}
                    </select>
                    <div>
                        <input className={style.button} type="submit" />
                    </div>
                    {console.log(activities)}
                </form>
            </div>
        </div>
    );
};
