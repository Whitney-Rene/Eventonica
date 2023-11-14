//imports react hooks and 2 comps
import { useState, useEffect } from "react";
import EventCard from "./eventCard";
import AddEvent from "./addEventForm";
import CardGroup from 'react-bootstrap/CardGroup';
import SearchBar from "./SearchBar";


function EventsList() {

  //state for events
  const [events, setEvents] = useState([]);

  //call api
  const getRequest = async () => {

    const response = await fetch('http://localhost:8080/api/events');
    const events = await response.json();

    setEvents(events);

    // console.log('Events fetched...', events);
  };

  //missing error handling?
  const handlePostRequest = (data) => {

    fetch("http://localhost:8080/api/events", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then((reponse) => reponse.json())
      .then((data) => {
        console.log("Inside the post line 28", data)
        setEvents([...events, data])
      })

  };

  const handleDeleteRequest = (eventIdToDelete) => {

    //can i leave it like ":id" ? or do I put eventIdToDelete?
    fetch(`http://localhost:8080/api/events/${eventIdToDelete}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'},
    })
    .then((response) => {
      if(response.status === 200) {
        getRequest();
      }
    })

  };

  const handleSearch = async (data) => {
    console.log('data', data);
    const response = await fetch(`http://localhost:8080/api/events?title=${data.search}`);
    const events = await response.json();
    setEvents(events);

}

  //calls this function, when the page loads
  useEffect(() => { 

    getRequest() 

  }, []);

  return (

    <>

    <div>
      <div className='search-bar-container'>
      <SearchBar handleSearch={handleSearch}/>
      </div>
      <CardGroup className="Events">
        {events.length > 0 ? events.map(event =>
          <EventCard key={event.id} title={event.title} location={event.location} eventdate={event.eventtime} event={event} delete={handleDeleteRequest}/>
        ): <div>Found Nothing</div>}
      </CardGroup>
    </div>

    <div>
      <AddEvent submit={handlePostRequest}/>
    </div>

    </>

  )
};

export default EventsList;