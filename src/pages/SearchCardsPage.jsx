import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllCardsWithName } from "../api/PokemonTCGApi.js";
import PokemonCardComponent from "../components/PokemonCardComponent.jsx";
import '../css/Pages css/SetCardsPage.css';

function SearchCardsPage() {
    const { cardName } = useParams();
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadCards = async () => {
            try {
                setLoading(true);
                const cardsData = await getAllCardsWithName(cardName);
                setCards(cardsData);
                setError(null);
            } catch (err) {
                console.error("Error loading cards:", err);
                setError("Failed to load cards");
            } finally {
                setLoading(false);
            }
        };
        loadCards();
    }, [cardName]);

    if (loading) return <div className="loading-cards">Loading cards...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="app-container">
            <div className="card-grid">
                {cards.map(card => (
                    <PokemonCardComponent
                        key={card.id}
                        card={card}
                    />
                ))}
            </div>
        </div>
    );
}

export default SearchCardsPage;