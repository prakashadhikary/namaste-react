import { useState } from "react";

// NavItem Component
const NavItem = () => {
    const [btnValue, setBtnValue] = useState("Login");
    return (
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button
                className="btn primary-btn"
                onClick={() => {
                    const newBtnValue = btnValue === "Login" ? "Logout" : "Login";
                    setBtnValue(newBtnValue);
                }}>
                {btnValue}
            </button>
        </ul>
    );
};

export default NavItem;
