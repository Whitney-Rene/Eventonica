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
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Search for an event:</label>
                    <input type="text" name='search' placeholder="Search Here" ref={userSearch}/>
                    <button className='searchbutton'type="submit">Submit</button>
                </form>
            </div>
        </>
    )

}

export default SearchBar