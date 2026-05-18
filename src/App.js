import './App.css';

import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import Spotify from './util/Spotify';

function App() {
    const [searchResults, setSearchResults] = useState([])

    const [playlistName, setPlaylistName] = useState('My Playlist');
    const updatePlaylistName = (newName) => {
      setPlaylistName(newName);
    }
    const savePlaylist = () => {

      // Create array of track URIs
      const trackURIs = playlistTracks.map(track => track.uri);

      console.log(trackURIs);

      // Mock save
      console.log(`Saving playlist: ${playlistName}`);

      // Reset playlist after save
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    };

    const search = (term) => {
      Spotify.search(term).then(setSearchResults);
    }

    const [playlistTracks, setPlaylistTracks] = useState([
      {
        id: 2,
        name: 'What I Got',
        artist: 'Sublime',
        album: '40oz. to Freedom',
        uri: 'spotify:track:456'
      }
    ]);
    const addTrack = (track) => {
      setPlaylistTracks((prevTracks) => {
        return [...prevTracks, track];
      });
    };
    const removeTrack = (trackToRemove) => {
      setPlaylistTracks((prevTracks) => {
        return prevTracks.filter(track => {
          return track.id !== trackToRemove.id;
        });
      });
    };
  return (
    <div>
      <h1>Jammming</h1>
      <button onClick={() => Spotify.getAccessToken()}>Login to Spotify</button>
      <SearchBar onSearch={search} />

      <SearchResults tracks={searchResults} onAdd={addTrack} />

      <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist} />
    </div>
  );
}

export default App;