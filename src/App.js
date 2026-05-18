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
          album: '40oz. to Freedom',
          uri: 'spotify:track:123'
      }
    ];
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

      <SearchBar />

      <SearchResults tracks={searchResults} onAdd={addTrack} />

      <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist} />
    </div>
  );
}

export default App;