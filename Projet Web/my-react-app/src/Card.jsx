
function Card({ image, title, text, onClick }) {
    return (
        <div className="card">
            <img className="card-image" src={image} alt="profile picture" />
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{text}</p>
            <button className="card-button" onClick={onClick}>Détails</button>
        </div>
    );
}

export default Card;
