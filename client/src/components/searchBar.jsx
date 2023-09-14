import {useRef} from 'react';

function SearchBar (props) {

    const userSearch = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userEvent = {search: userSearch.current?.value};
        
        //why didn't I need to import eventsList component?  because this is a child?
        props.handleSearch(userEvent);
        
        userSearch.current.value='';

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Search for an event:</label>
                <input type="text" name='search' placeholder="Search Here" ref={userSearch}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )

}

export default SearchBar