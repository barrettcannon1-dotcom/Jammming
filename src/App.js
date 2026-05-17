import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';

function App() {
  return (
    <div>
      <h1>Jammming</h1>

      <SearchBar />

      <SearchResults />

      <Playlist />
    </div>
  );
}

export default App;