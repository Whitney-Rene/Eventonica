import Card from 'react-bootstrap/Card';
//library that converts/formats time
import moment from 'moment';
//im

const EventCard = (props) => {


    const handleDelete = (e) => {
        e.preventDefault();
        //how to grab event id?
        // const eventID = {props.key};

        // props.delete(eventID);
    
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