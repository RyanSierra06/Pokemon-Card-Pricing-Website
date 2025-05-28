import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleCard } from '../api/PokemonTCGApi.js';
import PokemonInfoComponent from '../components/PokemonInfoComponent.jsx';
import '../css/Pages css/CardsInfoPage.css';

function CardsInfoPage() {
    const { cardId } = useParams();
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadCard = async () => {
            try {
                const cardData = await getSingleCard(cardId);
                setCard(cardData);
            } catch (err) {
                console.error("Error loading card:", err);
                setError("Failed to load card");
            } finally {
                setLoading(false);
            }
        };
        loadCard();
    }, [cardId]);

    if (loading) return <div className="loading">Loading card...</div>;
    if (error) return <div className="error">{error}</div>;
    if (!card) return <div className="error">Card not found</div>;

    return (
        <div className="cards-info-page">
            <PokemonInfoComponent card={card} />
        </div>
    );
}

export default CardsInfoPage;