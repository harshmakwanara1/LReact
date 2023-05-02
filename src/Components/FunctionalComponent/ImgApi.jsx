import React,{useState,useEffect} from "react";

function ImgApi() {
    const [data,setdata] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos").then((res)=>{
            res.json().then((rep)=>{
                setdata(rep)
            })
        })
    }, []);
    return ( 
        <>
          <table width="100%" border="2px" className="tab-border">
            <tr>
                <td>albumid</td>
                <td>id</td>
                <td>title</td>
                <td>url</td>
                <td>thumbnailurl</td>
            </tr>
            {
                data.map((item)=>
                <tr>
                    <td>{item.albumId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td><img src={item.url} alt="" /></td>
                    <td>{item.thumbnailUrl}</td>
                </tr>
                )
            }
          </table>
        </>
     );
}

export default ImgApi;