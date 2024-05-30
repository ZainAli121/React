import React from "react";
import { useParams } from "react-router-dom";

export default function User(){
    const {userid} = useParams()
    return(
        <>
            <h1 className="bg-green-700 text-white p-5 text-center text-3xl">User: {userid} </h1>
        </>
    )
}