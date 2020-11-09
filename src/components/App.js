import React, { useState, useEffect } from "react"
import { render } from "react-dom"
import Child1 from "./Child1"
import Child2 from "./Child2"

// class based Component, which takes count as a state variable
// const App = () => {
//     return(<h1> hello </h1>)
// }

// class App extends  React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             count: 0
//         }
//     }
//     componentDidMount() {
//         console.log("COMPONENT DID MOUNT: runs after first render")
//         document.title = `You clicked ${this.state.count} times`;
//     }

//     componentDidUpdate() {
//         console.log("COMPONENT DID Update: runs after subsequent renders")
//         document.title = `You clicked ${this.state.count} times`;
//     }
//     // note:  every time a state changes component rerender
//     render(){
//         return(
//             <div>
//             {/* showing state value */}
//                 <p> you clicked {this.state.count} times </p>
//             {/* update state value */}
//             <button onClick={() => this.setState({count: this.state.count + 1})}>Click me </button>
//             </div>
//         )
//     }
// }

// use function : but make a function stateful using some helper called hooks for state based activity
// defaultValue = 0
// const [age,setAge] = useState(0)
// const [count, setCount] = useState(0)
// const [fruit, setfruit] = useState("orange")
// const [todos, setToDos] = useState([{text: 'learn hooks'}])


// refactor class to hooks

// const App = () => {
//     const [count, setCount] = useState(0)
//     return (
//         <div>
//             <p> you clicked {count} times</p>
//             <button onClick = {() => setCount(count + 1)}>Click Me</button>
//         </div>
//     )
// }

const App = ()=>{
    const [count, setCount] = useState(0)
    
    function onClickCallBack(){
        setCount(count + 1)
    }

    // combination of comDidMount and compDidUpdate : runs after first render and also subsequent render provided count value has changed
    useEffect(() => {
        console.log("equivalent to component DID MOUNT : intiate api calls")
        document.title = `you clicked ${count} times`
        return () => {
            console.log("As good as component will unmount clear any background tasks for this components or clear any timers that you have set here for this component")
        }
    }, [count])

    // run on every render provide the previous count is differnt to current count
    return(
        <div>
        <h1>This is parent rendering two children components </h1>
            <Child1 clickHandler={onClickCallBack} />
            <Child2 count={count} />
         </div>
    )
}


export default App