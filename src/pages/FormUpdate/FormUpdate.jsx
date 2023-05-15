import React, { useState } from 'react';
import style from "./FormUpdate.module.css"
import { useGetActivitesQuery, useUpdateActivityMutation } from "../../api/apiSlice"

export const FormUpdate = ({id}) => {
    const { data: activities } = useGetActivitesQuery();
    
    const [updateActivity] = useUpdateActivityMutation();


    return (
        <div>
            <form className={""}>
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
                            onChange={""}
                            // value={act.name}
                        />
                    </div>
                    <div>
                        <input
                            className={style.input}
                            required
                            autoComplete="off"
                            placeholder="Duration (in hours)"
                            name="duration"
                            onChange={""}
                            //value={act.duration}
                        />
                    </div>
                    <select className={style.select} name="difficulty" //value={act.difficulty} 
                    onChange={""}>
                        <option>Difficulty level</option>
                        <option value="1">1 ⚪</option>
                        <option value="2">2 🟢</option>
                        <option value="3">3 🟡</option>
                        <option value="4">4 🟠</option>
                        <option value="5">5 🔴</option>
                    </select>
                    <select className={style.select} name="season" //value={act.season}
                     onChange={""}>
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
                    <button className={style.button} type="submit" >Save </button>
                </div>
            </form>

        </div>
    )
}
