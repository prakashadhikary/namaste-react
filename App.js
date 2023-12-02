const parent = React.createElement("h1", {}, "I'm an h1 tag");

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);