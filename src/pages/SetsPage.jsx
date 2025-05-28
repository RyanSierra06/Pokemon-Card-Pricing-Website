import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllSets } from "../api/PokemonTCGApi.js";
import SetCardComponent from "../components/SetCardComponent.jsx";
import '../css/Pages css/SetsPage.css';

function SetsPage() {
    const [sets, setSets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadSets = async () => {
            try {
                const allSets = await getAllSets();
                setSets(allSets);
                setError(null);
            } catch (err) {
                console.error("Error loading sets:", err);
                setError("Failed to load sets");
            } finally {
                setLoading(false);
            }
        };
        loadSets();
    }, []);

    if (loading) return <div className="loading-sets">Loading sets...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="app-container">
            <div className="sets-grid">
                {sets.map(set => (
                    <Link
                        key={set.id}
                        to={`/PokemonPricingWebsite/sets/${set.id}`}
                        className="set-link"
                    >
                        <SetCardComponent set={set} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SetsPage;