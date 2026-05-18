import { useState } from 'react';

function SearchBar(props) {
    const [term, setTerm] = useState('');

    const handleTermChange = (event) => {
        setTerm(event.target.value);
    };

    const search = () => {
        props.onSearch(term);
    };

    return (
        <div>
            <input placeholder="Search for a song" onChange={handleTermChange} />
            
            <button onClick={search}>SEARCH</button>
        </div>
    );
}

export default SearchBar;