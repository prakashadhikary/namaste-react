import { useState, useEffect } from "react";
import { RES_MENU_API } from "./constants";

const resRestaurantMenu = (resId) => {
    const [resMenu, setResMenu] = useState([]);

    useEffect(() => {
        fetchResMenu();
    }, []);

    const fetchResMenu = async () => {
        const response = await fetch(RES_MENU_API + resId);
        const json = await response.json();
        setResMenu(json);
    };

    return resMenu;
};

export default resRestaurantMenu;
