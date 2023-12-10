import React from "react";
import ReactDOM from "react-dom/client";

/* Components */
import Header from "./components/Header";
import Body from "./components/Body";

// App Container
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

// Create root to render a Component
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render a Component to the root
root.render(<AppLayout />);
