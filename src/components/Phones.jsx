// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const Phones = () => {

    const phones = useLoaderData()
    console.log(phones.data);
    return (
        <div>
            <h1>All phones here:{phones.data.length}</h1>
            <img src={phones.data[1].image} alt="" />
        </div>
    );
};

export default Phones;