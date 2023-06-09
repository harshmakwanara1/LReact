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
    console.log(data);
    return(
        <>
        <div>
            <h1>Fetch api data</h1>
            <table className="tab-border" border="2px solid black" width="90%">
                <tr >
                    <td>userid</td>
                    <td>id</td>
                    <td>title</td>
                    <td>completed</td>
                </tr>
                {
                    data.map((item)=>
                    <tr >
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.completed.toString()}</td>
                    </tr>
                    )
                }
            </table>
        </div>
        </>
    )
};
export default FetchApi;