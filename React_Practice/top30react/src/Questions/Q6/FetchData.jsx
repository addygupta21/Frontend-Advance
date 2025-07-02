// Create a component that fetches and displays the data

import { useEffect, useState } from "react";

const FetchData = () =>{
    const [data, setData] = useState([]);
     const fetchDataFunction = async () =>{
        try{
            const fetchedData = await fetch("https://jsonplaceholder.typicode.com/posts");
            console.log("one, ", fetchedData);
            const data1 = await fetchedData.json();
            console.log(data1);
            setData(data1);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchDataFunction();
    }, []);

    return (
        <>
            {data.map(val =>{
                return <ul key = {val.id}>
                        <li>{val.body}
                        </li> {val.title} 
                </ul>
            }) }
        </>
    );
};

export default FetchData;