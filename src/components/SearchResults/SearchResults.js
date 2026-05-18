import './SearchResults.css';

import Tracklist from '../Tracklist/Tracklist';

function SearchResults(props) {
    return (
        <div>
            <h2>Results</h2>
            <Tracklist tracks={props.tracks} onAdd={props.onAdd}/>
        </div>
    )
}

export default SearchResults;