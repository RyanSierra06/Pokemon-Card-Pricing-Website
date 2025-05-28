import { Link, useNavigate} from 'react-router-dom';
import '../css/components css/PokemonInfoComponent.css';

function PokemonInfoComponent({ card }) {
    const navigate = useNavigate();

    return (
        <div className="pokemon-info">
            <div className="pokemon-info-pic">
                <img
                    src={card.image}
                    alt={`${card.name} image`}
                    onError={(e) => {
                        e.target.src = '/error.png';
                        e.target.style.objectFit = 'contain';
                    }}
                />
                <div>
                    <h3>Market Price: ${card.price}</h3>
                    <p>Last Updated On: {card.updated.split("/")[1]}-{card.updated.split("/")[2]}-{card.updated.split("/")[0]}</p>
                </div>
            </div>


            <div className="pokemon-card-info">
                <div className="info-section">
                    <h2 className="card-name">{card.name}</h2>
                    <div className="info-row">
                        <span className="info-label">Number:</span>
                        <span className="info-value">{card.number}</span>
                    </div>
                    <div className="info-row">
                        <span className="info-label">Type:</span>
                        <span className="info-value">{card.types?.join(', ')}</span>
                    </div>
                    <div className="info-row">
                        <span className="info-label">HP:</span>
                        <span className="info-value">{card.hp}</span>
                    </div>
                </div>

                {card.attacks?.length > 0 && (
                    <div className="info-section">
                        <h2>Attacks:</h2>
                        {card.attacks.map((attack, index) => (
                            <div key={index} className="attack">
                                <div className="attack-name">{attack.name}</div>
                                <div className="attack-details">
                                    <span>Cost: {attack.cost?.join(' ')}</span>
                                    <span>Damage: {attack.damage || 'N/A'}</span>
                                    <div>{attack.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="info-section">
                    <div className="info-row">
                        <span className="info-label">Weakness:</span>
                        <span className="info-value">
                            {card.weaknesses?.map(w => `${w.type} ${w.value}`).join(', ')}
                        </span>
                    </div>
                    <div className="info-row">
                        <span className="info-label">Set:</span>
                        <span className="info-value">{card.set?.name}</span>
                    </div>
                    <div className="info-row">
                        <span className="info-label">Artist:</span>
                        <span className="info-value">{card.artist}</span>
                    </div>
                </div>

                <button
                    onClick={() => navigate(-1)}
                    className="back-link"
                >
                    ← Back to Previous Page
                </button>
            </div>
        </div>
    );
}

export default PokemonInfoComponent;