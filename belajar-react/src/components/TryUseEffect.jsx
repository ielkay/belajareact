import { useState } from "react";

export default function UseComponent(){
 const getdata = async () => {
    const data = await fetch ("https://jsonplaceholder.typicode.com/posts");    
    try {
        console.log(data);
     } catch (error) {
            console.log(error)
        }
    }
 
    UseEffect(() => {
getdata();
    }, [] )
}