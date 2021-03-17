import React, {useState} from 'react';
import './App.css';



export default() => {
    const [x, setX] = useState(null);
    const [y, setY] = useState(null);
    const [z, setZ] = useState(null);

    return (
        <>
            <div>
            Number 1
            <input type="text" onChange={e => setX(parseInt(e.target.value))}></input>
            </div>
            <div>
            Number 2
            <input type="text" onChange={e => setY(parseInt(e.target.value))}></input>
            </div>
            <div id="buttons">
            <button id="addButton" onClick={() => setZ(x + y)}>
            Add
            </button>

            <button id="subtractButton" onClick={() => setZ(x - y)}>
            Subtract
            </button>
            </div>
            
            <div>Total <input id="total" type="text" value={z} ></input></div>
        </>
    )
}