import React, { useEffect, useState } from "react";

export default function Github(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch("https://api.github.com/users/ZainAli121")
        .then(response => response.json())
        .then(data => {
            setData(data)
        })
    }, [])
    return(
        <div className="p-4 bg-slate-400 text-yellow-100 text-2xl text-center ">
            <h1>Github Followers: {data.followers}</h1>
            <img src={data.avatar_url} alt="Github Img" width={200}/>
        </div>
    )
}