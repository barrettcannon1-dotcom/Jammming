import './App.css';

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

    const playlistTracks = [
      {
        id: 2,
        name: 'What I Got',
        artist: 'Sublime',
        album: '40oz. to Freedom'
      }
    ];
  return (
    <div>
      <h1>Jammming</h1>

      <SearchBar />

      <SearchResults tracks={searchResults}/>

      <Playlist />
    </div>
  );
}

export default App;