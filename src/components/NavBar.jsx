import { Link } from "react-router-dom";
import "../css/Navbar.css"

function NavBar() {
    return <nav className="navbar">
        <div className="narbar-brand">
            <Link to="/">Bobby Movie App</Link>
        </div>
        <div className="narbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favourites" className="nav-link">Favourites</Link>
        </div>
    </nav>
}

export default NavBar
