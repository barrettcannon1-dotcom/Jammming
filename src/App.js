import './App.css';

import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';

function App() {
    const searchResults = [
      {
          id: 1,
          name: 'Wrong Way',
          artist: 'Sublime',
          album: '40oz. to Freedom'
      }
    ];
    const playlistName = 'My Playlist';

    const [playlistTracks, setPlaylistTracks] = useState([
      {
        id: 2,
        name: 'What I Got',
        artist: 'Sublime',
        album: '40oz. to Freedom'
      }
    ]);
    const addTrack = (track) => {
      setPlaylistTracks((prevTracks) => {
        return [...prevTracks, track];
      });
    };
  return (
    <div>
      <h1>Jammming</h1>

      <SearchBar />

      <SearchResults tracks={searchResults} onAdd={addTrack} />

      <Playlist playlistName={playlistName} playlistTracks={playlistTracks} />
    </div>
  );
}

export default App;