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

const jsxHeading = <h1 id="heading" >Heading form React 🚀</h1>;  // Creating React element using JSX
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);