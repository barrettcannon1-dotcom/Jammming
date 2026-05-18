import './Playlist.css';

import Tracklist from '../Tracklist/Tracklist';

function Playlist(props) {
    return (
        <div>
            <h2>Playlist</h2>
            <input placeholder="Playlist Name" value={props.playlistName} onChange={(event) => props.onNameChange(event.target.value)} />

            <Tracklist tracks={props.playlistTracks} onRemove={props.onRemove}/>

            <button>SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;