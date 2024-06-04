import profilePic from './assets/runners.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src= {profilePic} alt="profile picture"></img>
            <h2 className="card-title">Les coureurs</h2>
            <p className="card-text">Les coureurs sont les premiers et les plus faibles des infectés qui apparaissent dans The Last of Us.</p>
        </div>
    );
}

export default Card