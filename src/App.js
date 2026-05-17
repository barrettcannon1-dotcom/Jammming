import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';

function App() {
    const tracks = [
      {
          id: 1,
          name: 'Wrong Way',
          artist: 'Sublime',
          album: '40oz. to Freedom'
      }
    ];
  return (
    <div>
      <h1>Jammming</h1>

      <SearchBar />

      <SearchResults tracks={tracks}/>

      <Playlist />
    </div>
  );
}

export default App;