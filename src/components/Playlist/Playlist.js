import './Playlist.css';

import Tracklist from '../Tracklist/Tracklist';

function Playlist() {
    return (
        <div>
            <h2>Playlist</h2>
            <input placeholder="Playlist Name" />

            <Tracklist tracks={[]} />

            <button>SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;