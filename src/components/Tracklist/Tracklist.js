import './Tracklist.css';

import Track from '../Track/Track';

function Tracklist(props) {
    return (
        <div>
            {props.tracks.map(track => {
                return <Track 
                key={track.id}
                track={track} 
                onAdd={props.onAdd}
                />;
            })}
        </div>
    );
}

export default Tracklist;