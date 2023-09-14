import Card from 'react-bootstrap/Card';
import moment from 'moment'; //imports library that converts/formats time
import { confirmAlert } from 'react-confirm-alert'; //imports function to create an alert
import 'react-confirm-alert/src/react-confirm-alert.css'; //imports the styling for that alert

const EventCard = (props) => {

    const handleDelete = () => {

        const eventID = props.event.id;

        confirmAlert({
            title: 'Confirm to Delete Event',
            message: `Are you sure you want to delete this event?: ${props.title}?`,
            buttons: [
              {
                label: 'Yes',
                onClick: () => props.delete(eventID)
              },
              {
                label: 'No',
                onClick: () => console.log('Click No')
              }
            ]
          });
    
    }

    

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Date: {!props.eventdate ? "TBD" : moment(props.eventdate).format('MMMM Do, YYYY')}</Card.Subtitle>
                <Card.Text>
                    Location: {props.location}
                </Card.Text>
                <button onClick={handleDelete}>Delete</button>
            </Card.Body>
        </Card>
    )
}

export default EventCard;