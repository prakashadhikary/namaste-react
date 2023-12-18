/* Mock Data */
import { useEffect, useState } from "react";

/* Components */
import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";

/* Main Body */
const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);

    const [filterdListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");

    // IMPORTANT NOTES
    /* ReactFiber */
    /* Whenever state variables updates, react triggers a reconciliation cycle(re-renders the react component) */

    // useEffect is called always on initial render

    // If no dependency array is provided, useEffect is called on every render of the component. Example:
    // useEffect(() => {
    //     fetchRestaurants();
    // });

    // If dependency array is empty, useEffect is called on initial render(just once). Example:
    // useEffect(() => {
    //     fetchRestaurants();
    // }, []);

    // If dependency array is provided, useEffect is called everytime dependency array is updated. Example:
    // useEffect(() => {
    //     fetchRestaurants();
    // }, [searchTerm]);

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        const result = await fetch(
            "https://corsproxy.io/?https://foodmandu.com/webapi/api/Vendor/GetVendors1?Cuisine=&DeliveryZoneId=1&IsFavorite=false&IsRecent=false&Keyword=&LocationLat=0&LocationLng=0&PageNo=1&PageSize=40&SortBy=4&VendorName=&VendorTags=%7B%7D&VendorTagsCSV=&search_by=restaurant"
        );

        const restList = await result.json();
        setListOfRestaurant(restList);
        setFilteredListOfRestaurant(restList);
    };

    const handleInputChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
    };

    return !listOfRestaurant.length ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter-container">
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search a Restaurant..."
                        className="search-input"
                        value={searchTerm}
                        onChange={handleInputChange}
                    />
                    <button
                        className="btn primary-btn"
                        onClick={() => {
                            // Filter books based on the search term
                            const filteredList = listOfRestaurant.filter((restaurant) =>
                                restaurant.Name.toLowerCase().includes(searchTerm.toLowerCase())
                            );
                            setFilteredListOfRestaurant(filteredList);
                        }}>
                        Search
                    </button>
                </div>
                <button
                    className="btn primary-btn"
                    onClick={() => {
                        const filteredRestaurants = listOfRestaurant.filter((res) => res.VendorRating > 4);
                        setFilteredListOfRestaurant(filteredRestaurants);
                    }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="restaurant-container">
                {filterdListOfRestaurant.map((restaurant) => (
                    <Restaurant key={restaurant.Id} restaurantData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
