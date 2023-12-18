import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../utils/constants";

// NavItem Component
const NavItem = () => {
    const [btnValue, setBtnValue] = useState("Login");
    return (
        <ul>
            <li>
                <Link to={ROUTE.HOME}>Home</Link>
            </li>
            <li>
                <Link to={ROUTE.ABOUT}>About Us</Link>
            </li>
            <li>
                <Link to={ROUTE.CONTACT}>Contact Us</Link>
            </li>
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
