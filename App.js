import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!");

const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id: "child"},[
        React.createElement("h1",{},"I'm a h1 tag"),
        React.createElement("h2",{},"I'm a h2 tag")
        ]
    )
); // Creating React element using React


//This is React Element
const jsxHeading = <h1 id="heading" >Namaste React form React Element 🚀</h1>;  // Creating React element using JSX 

const HeadingComponent = () => <h1 id="heading"> Namaste React from React Function Component 🚀</h1>;
const Title = () => (
    <div className="container">
        {/* Here is the prime example of Component Composition */}
        <HeadingComponent /> 
        <h1>Title after Component Composition</h1>
        {/* JSX allows any Javascipt code inside it using "{}" thses parentheses, example below */}
        {heading}
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Title />); // This is how a Component is Rendered
// root.render(jsxHeading); //This is how a React Element is Rendered