
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">

            <div className="navbar-left">

                <Link to="/" className="logo">
                    prime video
                </Link>

                <Link to="/">
                    Home
                </Link>

                <Link to="/movies">
                    Movies
                </Link>

                <Link to="/tv-shows">
                    TV Shows
                </Link>

                <Link to="/live-tv">
                    Live TV
                </Link>

            </div>

            <div className="navbar-right">

                <Link to="/search" className="search">
                    🔍
                </Link>

                <div className="language">
                    EN
                </div>

                <Link to="/profile" className="profile">
                    👤
                </Link>

                <Link to="/login">
                    <button className="join-button">
                        Join Prime
                    </button>
                </Link>

            </div>

        </nav>
    );
}

export default Navbar;
