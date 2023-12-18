import { Link } from "react-router-dom";
import { ROUTE } from "../utils/constants";

// Restaurant Card Component
const Restaurant = (props) => {
    const restaurant = props?.restaurantData;
    const { Id, Name, Address1, CuisineTags, VendorRating } = restaurant;
    return (
        <div className="restaurant">
            <div className="restaurant-image-wrapper">
                <Link to={ROUTE.RESTAURANT + "/" + restaurant.Id}>
                    <img alt={Name} className="restaurant-image" src={restaurant.VendorListingWebImageName} />{" "}
                </Link>
            </div>
            <div className="restaurant-detail">
                <div className="restaurant-name">
                    <h2>
                        <Link to={ROUTE.RESTAURANT + "/" + restaurant.Id}>{Name} </Link>
                    </h2>
                </div>
                <h4>{Address1}</h4>
                <h4>{VendorRating} Stars</h4>
                <h4>{CuisineTags}</h4>
            </div>
        </div>
    );
};

export default Restaurant;
