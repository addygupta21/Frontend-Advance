import { useState } from "react";
const Form = () =>{
    const [input, setInput] = useState(null);

    const handleSubmit = () => {
        alert("form submitted");
        setInput("addy");
    }
    return (
        <>
        <div className="form">


            <form className="form-1" onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                 <button type="submit">Click</button>
            </form>
        // Form should get onSubmit written on it;s attribuyted only    
        </div>
        </>
    )
}

export default Form;