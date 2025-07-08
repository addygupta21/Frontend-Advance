import { useState } from "react";
import './style.css';
const SearchBar = () =>{
    const [input, setInput] = useState("");

    const items = Array.from({length: 5}, (_, i) => `Test item ${i+1}`);
    console.log(items);

    const filteredItems = items.filter(x => x.toLowerCase().includes(input.toLowerCase()));
    return (
        <div className="search-bar">
            <h1> Search BAr Component</h1>
            <input type="text" value= {input} onChange={e => setInput(e.target.value)}></input>

            {filteredItems.length > 0 ? <ul> {filteredItems.map((x) =>  (
                    <li key = {x}> {x} </li>
            ))}
            </ul> :
            <p> Loading ... </p>}
        </div>
    );
};

export default SearchBar;