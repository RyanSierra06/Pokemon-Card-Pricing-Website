import "../css/components css/PokemonCardComponent.css"
import { Link } from 'react-router-dom'

function PokemonCardComponent({card}) {
    return (
        <Link to={`/cards/${card.id}`} className="pokemon-card-link">
            <div className="pokemon-card">
                <div className="card-image">
                    <img
                        src={card.image}
                        alt={`${card.name} image`}
                    />
                </div>
                <div className="card-content">
                    <h3>{card.name}</h3>
                </div>
            </div>
        </Link>
    );
}

export default PokemonCardComponent;