import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantInfo(resId);
    const resMenu = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { Name, Description, VendorCoverImageName, VendorLogoImageName } = resInfo;

    return (
        <div className="menu">
            <div className="res-background">
                <img alt={Name} src={VendorCoverImageName} />
                <div className="res-detail">
                    <div className="res-logo">
                        <img alt={Name} src={VendorLogoImageName} />
                    </div>
                    <div>
                        <h1>{Name}</h1>
                        <p>{Description}</p>
                    </div>
                </div>
            </div>
            <h2>Menu</h2>
            <div className="res-menu-list">
                <div className="category-list-wrapper">
                    <ul>
                        {resMenu.map((menu) => (
                            <li key={menu.categoryId}>
                                <a href={"#category-" + menu.categoryId}>{menu.category}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="menu-list-wrapper">
                    {resMenu.map((menu) => (
                        <div key={menu.categoryId} className="menu-list" id={"category-" + menu.categoryId}>
                            <h2>{menu.category}</h2>
                            <ul>
                                {menu.items.map((item) => (
                                    <li key={item.productId}>{item.name}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RestaurantMenu;
