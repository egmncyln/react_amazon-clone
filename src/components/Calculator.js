import React from 'react'
import './Calculator.css';

function Calculator(props) {
    return (
        <div key={props?.key} className="calculator">
            <button key={props?.key} onClick={props?.decrease}>-</button>
            <input type="text" key={props?.key} value={props?.quantity} readOnly></input>
            <button key={props?.key} onClick={props?.increase}>+</button>
        </div >
    )
}

export default Calculator
