import "../css/components css/SetCardComponent.css";

function SetCardComponent({ set }) {
    if (!set) return null;

    return (
        <div className="set-card">
            <div className="card-image">
                <img
                    src={set.images?.logo}
                    alt={`${set.name} set logo`}
                    onError={(e) => {
                        e.target.src = '/error.png';
                    }}
                />
            </div>
            <div className="set-info">
                <h2>{set.name}</h2>
                <h3>{set.releaseDate.split("/")[0]}</h3>
            </div>
        </div>
    );
}

export default SetCardComponent;