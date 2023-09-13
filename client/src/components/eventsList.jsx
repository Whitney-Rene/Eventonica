//imports react hooks and 2 comps
import { useState, useEffect } from "react";
import EventCard from "./eventCard";
import AddEvent from "./addEventForm";
import CardGroup from 'react-bootstrap/CardGroup';


function EventsList() {
  //state for events
  const [events, setEvents] = useState([]);

  //call api
  const getRequest = async () => {
    const response = await fetch('http://localhost:8080/api/events');
    const events = await response.json();
    setEvents(events);
    console.log('Events fetched...', events);
  }

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
  }

  // const handleDeletRequest = (data) => {
  //   //can i leave it like ":id" ? or do I put data?
  //   fetch("http://localhost:8080/api/events/:id", {
  //     method: 'DELETE',
  //     headers: { 'Content-Type': 'application/json'},
  //     body: JSON.stringify(data)
  //   })

  // }

  //calls this function, when the page loads
  useEffect(() => { getRequest() }, []);

  return (
    <>
    <div>
      <CardGroup className="Events">
        {events.map(event =>
          <EventCard key={event.id} title={event.title} location={event.location} eventdate={event.eventtime} />
          // delete={handleDeleteRequest}
        )}
      </CardGroup>
    </div>
    <div>
      <AddEvent submit={handlePostRequest}/>
    </div>
    </>
  );
}

export default EventsList;