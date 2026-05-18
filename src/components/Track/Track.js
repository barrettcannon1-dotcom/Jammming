import './Track.css';

function Track(props) {
    return (
    <div>
        <h3>{props.track.name}</h3>

        <p>{props.track.artist} | {props.track.album}</p>
        {props.onAdd && (
        <button onClick={() => props.onAdd(props.track)}>+</button>
        )}
        {props.onRemove && (
            <button onClick={() => props.onRemove(props.track)}>-</button>
        )}
    </div>
    );
}

export default Track;