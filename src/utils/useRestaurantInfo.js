import { useState, useEffect } from "react";
import { RES_INFO_API } from "./constants";

const useRestaurantInfo = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchResInfo();
    }, []);

    const fetchResInfo = async () => {
        const response = await fetch(RES_INFO_API + resId);
        const json = await response.json();
        setResInfo(json[0]);
    };

    return resInfo;
};

export default useRestaurantInfo;
