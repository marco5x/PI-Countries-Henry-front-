import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import style from './Activities.module.css';
import { FormUpdate } from '../../pages/FormUpdate/FormUpdate';
import { useGetActivitesQuery, useDeleteActivityMutation } from "../../api/apiSlice"


function Activities() {
    const modalEdit = document.getElementById("modal");

    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState(0)
    const { data: activities, isLoading, isError, error } = useGetActivitesQuery()
    const [deleteActivity] = useDeleteActivityMutation();

    if (isLoading) return <div>Cargando...</div>;
    else if (isError) return <div>Error: {error.error}</div>;

    let datos = (id) => {
        setData(id)
        setShowModal(!showModal)
    }

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
                                <button className={style.button} type="button"
                                    onClick={() => datos(act.id)}
                                >Edit
                                </button>
                            </td>
                            <td>
                                <input className={style.button} type="button" value="🗑"
                                    onClick={() => {
                                        if (window.confirm("Confirm delete activity"))
                                            deleteActivity(act.id)
                                    }} />
                            </td>
                        </tr>
                    ) : <td colspan="7">No hay actividades turisticas, agrega una ahora...</td>}
                </tbody>
            </table>
            {showModal ? (createPortal(
                    <div className={style.modal}>
                        <div className={style.mod}>
                            <button onClick={() => setShowModal(!showModal)} >❌</button>
                            <FormUpdate id={data} mod={showModal} set={setShowModal} />
                        </div>
                    </div>
                , modalEdit)) : null}
        </div>
    )
}

export default Activities
