import {Link, useNavigate} from "react-router-dom";
import "../css/components css/NavBar.css"
import {useState} from "react";

function NavBar() {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/PokemonPricingWebsite/search/${encodeURIComponent(searchQuery)}`);
            setSearchQuery("");
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/PokemonPricingWebsite/">Pokédex</Link>
            </div>
            <div className="search-container">
                <form onSubmit={handleSearch} className="search-form">
                    <input
                        type="text"
                        placeholder={`Search cards...`}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                    <button type="submit" className="nav-link search-button">
                        Search
                    </button>
                </form>
            </div>

            <div className="navbar-links">
                <Link to="/PokemonPricingWebsite/" className="nav-link">Sets</Link>
            </div>
        </nav>
    )
}

export default NavBar;