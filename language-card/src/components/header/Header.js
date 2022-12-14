import reactLogo from "../../assets/react.webp";
import "./Header.css"

const Header = () => {
    return (
        <div className="logo-container">
            <img className="react-logo" src={reactLogo} alt="react-logo"  />
        </div>
    )
}

export default Header;