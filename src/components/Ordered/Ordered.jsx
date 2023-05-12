import React, { useEffect, useState } from "react";
import style from "./Ordered.module.css";
import { useGetCountriesQuery,
     useGetSortAToZQuery,
     useGetSortZToAQuery,
     useGetSortPopulationAscQuery,
     useGetSortPopulationDescQuery
     } from "../../api/apiSlice"


const Ordered = () => {

    const [order, setOrder] = useState("");

    const {data: getCountries,  } = useGetCountriesQuery()
    const {data: sortAToZ,  } = useGetSortAToZQuery()
    const {data: sortZToA,  } = useGetSortZToAQuery()
    const {data: sortPopulationAsc,  } = useGetSortPopulationAscQuery()
    const {data: sortPopulationDesc,  } = useGetSortPopulationDescQuery()


     useEffect(() => {
         if (order === "all") return getCountries;
         else if (order === "a-z") return sortAToZ;
         else if (order === "z-a") return sortZToA;
         else if (order === "populationAsc") return sortPopulationAsc;
         else if (order === "populationDesc") return sortPopulationDesc;
    }, [order, getCountries, sortAToZ, sortZToA, sortPopulationAsc, sortPopulationDesc ]);

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

export default Ordered;
