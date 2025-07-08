import { useState } from "react";
import './style.css'
const Pagination = ({itemsPerPage}) =>{
    const [pageNumber, setPageNumber] = useState(1);
    const itemArray = Array.from({length: 100},(_,i) => `Array item ${i+1}`);
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const totalPages = (itemArray.length)/(itemsPerPage);
    const displayItems = itemArray.slice(startIndex, endIndex);



    
    return (
        <>
            <h1> Pagination here </h1>
            {displayItems.length > 0 ? <ul className="ull">
                {displayItems.map(ind => (
                    <li key ={ind} >{ind}</li>
                ))}
            </ul>:
            <div> Not Available</div>}

            <div className="buttons" style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <div className="prev-button">
                    <button disabled={pageNumber ===1} onClick={() => setPageNumber(prev => prev - 1)}>Prev</button>
                </div>

                {Array.from({length: totalPages}, (_,i) => (
                    <button key = {i} onClick={() => setPageNumber(i)}> {i+1}</button>
                ))}

                <div className="next button">
                    <button disabled={pageNumber===totalPages} onClick = {() => setPageNumber(prev => prev + 1)}>Next</button>
                </div>

            </div>
        </>
    );
};

export default Pagination;