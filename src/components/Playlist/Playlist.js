import './Playlist.css';

import Tracklist from '../Tracklist/Tracklist';

function Playlist(props) {
    return (
        <div>
            <h2>Playlist</h2>
            <input placeholder="Playlist Name" />

            <Tracklist tracks={props.playlistTracks} />

            <button>SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;