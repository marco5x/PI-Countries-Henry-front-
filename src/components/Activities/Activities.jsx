import React from 'react';
import style from './Activities.module.css';
import { useGetActivitesQuery, useUpdateActivityMutation, useDeleteActivityMutation } from "../../api/apiSlice"

function Activities() {
    const { data: activities, isLoading, isError, error } = useGetActivitesQuery()
    const [updateActivity] = useUpdateActivityMutation();
    const [deleteActivity] = useDeleteActivityMutation();

    if (isLoading) return <div>Cargando...</div>;
    else if (isError) return <div>Error: {error.message}</div>;

    return (
        <div className={style.container}>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th>Name Activity</th>
                        <th>Difficulty</th>
                        <th>Duration</th>
                        <th>Seasson</th>
                        <th>Countries</th>
                        <th>Edit Activity</th>
                        <th>Delete Activity</th>
                    </tr>
                </thead>
                <tbody>
                    {activities.length ? activities.map(act =>
                        <tr key={act.id}>
                            <td>{act.name}</td>
                            <td>{act.difficulty}</td>
                            <td>{act.duration}</td>
                            <td>{act.season}</td>
                            <td>{act.countries.map(c => c.name)}</td>
                            <td>
                                <input type="button" className={style.button}  value="Editar"
                                onChange={(e) => {
                                    updateActivity({ ...act});
                                  }}/>
                            </td>
                            <td>
                                <input className={style.button} type="button" value="🗑" 
                                onClick={() => { deleteActivity(act.id)}}/>
                            </td>
                        </tr>
                    ) : <td colspan="7">No hay actividades turisticas, agrega una ahora...</td>}
                </tbody>
            </table>
        </div>
    )
}

export default Activities
