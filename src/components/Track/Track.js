import './Track.css';

function Track(props) {
    return (
    <div>
        <h3>{props.track.name}</h3>

        <p>{props.track.artist} | {props.track.album}</p>

        <button>+</button>
    </div>
    );
}

export default Track;