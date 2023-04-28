import React, { Component, useEffect, useState } from "react";

const FetchApi = () => {
    const [data,setdata] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos").then((result)=>{
            result.json().then((resp)=>{
                setdata(resp)
            })
        })
    }, []);

    return(
        <>
        <div>
            <h1>Fetch api data</h1>
        </div>
        </>
    )
};
export default FetchApi;