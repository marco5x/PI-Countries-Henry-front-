import React, { useState } from 'react';
import style from "./FormUpdate.module.css"
import { useGetActivitesQuery, useUpdateActivityMutation } from "../../api/apiSlice"


export const FormUpdate = ({ id, mod, set }) => {
    
    const { data: activities } = useGetActivitesQuery();
    const [updateActivity] = useUpdateActivityMutation();
    const activity = activities.find(act => act.id === id)

    const [activitie, setActivitie] = useState({
        id: activity.id,
        name: activity.name,
        difficulty: activity.difficulty,
        duration: activity.duration,
        season: activity.season,
    });

    const handleActivity = (e) => {
        setActivitie({
            ...activitie,
            [e.target.name]: e.target.value,
        })   
    };
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        updateActivity(activitie)//uso del hook de RTK
        alert("✅ Activity Updated");
        set(!mod)
    };

    return (
        <div>
            <form className={(activitie.season === "Summer")? style.summer : 
                 (activitie.season === "Autumn")? style.autumn:
                 (activitie.season === "Winter")? style.winter:
                 (activitie.season === "Spring")? style.spring : style.form}
                  onSubmit={handleSubmit}>
                <h2>Edit tourist activity</h2>
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
                            value={activitie.name}
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
                            value={activitie.duration}
                        />
                    </div>
                    <select className={style.select} name="difficulty" value={activitie.difficulty} 
                    onChange={handleActivity}>
                        <option>Difficulty level</option>
                        <option value="1">1 ⚪</option>
                        <option value="2">2 🟢</option>
                        <option value="3">3 🟡</option>
                        <option value="4">4 🟠</option>
                        <option value="5">5 🔴</option>
                    </select>
                    <select className={style.select} name="season" value={activitie.season}
                     onChange={handleActivity}>
                        <option>Seasson...</option>
                        <option className={style.op} value="Summer">
                            Summer 🌞
                        </option>
                        <option value="Autumn">Autumn 🍁 </option>
                        <option value="Winter">Winter ❄ </option>
                        <option value="Spring">Spring 🌼</option>
                    </select>
                </div>
                <div>
                    <button className={style.button} type="submit">Save </button>
                </div>
            </form>
        </div>
    )
}
