import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("h1", { className: "heading" }, "I'm an h1 tag"),
    React.createElement("h2", { className: "heading" }, "I'm an h2 tag"),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
