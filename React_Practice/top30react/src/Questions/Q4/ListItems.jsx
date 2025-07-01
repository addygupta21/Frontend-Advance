// Build a list component to display a list of items.

const ListItems = () => {
    const itemArray = ["item1", "item2", "item3", "item4", "item5", "item6"];
    return (
        <>
            <ul>
            {itemArray.map((element,index) =>{
                return <li key = {index}>{element}</li>
            })}
            </ul>
        </>
    );
};

// Imp: Map is an array, so it is very import to the return the element for each of the array.

export default ListItems;