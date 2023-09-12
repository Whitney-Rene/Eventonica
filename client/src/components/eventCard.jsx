import Card from 'react-bootstrap/Card';
import moment from 'moment';

const EventCard = (props) => {
    console.log(props.eventtime);
    const localTime = moment(props.eventtime).local();
    const formattedTime = localTime.format('MMMM Do, YYYY @ h:mm A');

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Date: {!props.eventtime ? "TBD" : formattedTime}</Card.Subtitle>
                <Card.Text>
                    Location: {props.location}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default EventCard;