import { Link } from "react-router-dom";
import { ROUTE } from "../utils/constants";

// Logo Component
const Logo = () => {
    return (
        <div id="logo" className="logo">
            <Link to={ROUTE.HOME}>prakaShop</Link>
        </div>
    );
};

export default Logo;
