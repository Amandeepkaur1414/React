import React from "react";
import ReactDOM from "react-dom/client";
// react Element
const jsxHeading=(
    <h1>Hi React</h1>
);

const Title = () =>
   ( <h1>Hi, Amandeep </h1>);

//react function
const Heading = () =>(
 <>
    <Title/>
    <h1>Hi React</h1>
    </>
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Heading/>)
