import Logo from "./Logo";
import NavItem from "./NavItem";

// Header Component
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <Logo />
            </div>
            <div className="nav-items">
                <NavItem />
            </div>
        </div>
    );
};

export default Header;
