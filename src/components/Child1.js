import React from "react"

const Child1 = (props) =>{
    return(
    <div>
        <button onClick={props.clickHandler}>Click me</button>
        <h1> Child 1</h1>
    </div>)
}

export default Child1