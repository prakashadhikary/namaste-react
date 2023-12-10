// Restaurant Card Component
const Restaurant = (props) => {
    const restaurant = props?.restaurantData;
    const { Name, Address1, CuisineTags, VendorRating } = restaurant;
    return (
        <div className="restaurant">
            <div className="restaurant-image-wrapper">
                <img alt={Name} className="restaurant-image" src={restaurant.VendorListingWebImageName} />
            </div>
            <div className="restaurant-detail">
                <div className="restaurant-name">
                    <h2>{Name}</h2>
                </div>
                <h4>{Address1}</h4>
                <h4>{VendorRating} Stars</h4>
                <h4>{CuisineTags}</h4>
            </div>
        </div>
    );
};

export default Restaurant;
