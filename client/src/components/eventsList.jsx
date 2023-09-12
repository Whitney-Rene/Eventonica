//imports react hooks and 2 comps
import { useState, useEffect } from "react";
import EventCard from "./eventCard";
import CardGroup from 'react-bootstrap/CardGroup';


function EventsList() {
    //state for events
    const [events, setEvents] = useState([]);

    //call api
    // const getRequest = () => {
    //   fetch("http://localhost:8080/api/events")
    //   .then((response) => response.json())
    //   .then(events => {
    //     setEvents(events); 
    //     console.log('Events fetched...', events);
    //     });
    // }

    //call api
    const getRequest = async () => {
      const response = await fetch ('http://localhost:8080/api/events');
      const events = await response.json();
      setEvents(events);
      console.log('Events fetched...', events);
    }

    //calls this function, when the page loads
    useEffect(() => {getRequest()}, []);

  return (
    <div>
    <CardGroup className="Events">
            {events.map(event =>
            <EventCard key={event.id} title={event.title} location={event.location} eventtime={event.eventtime}/>
            )}
    </CardGroup>
    </div>
  );
}

export default EventsList;