import Card from 'react-bootstrap/Card';
//library that converts/formats time
import moment from 'moment';

const EventCard = (props) => {

    // const handleDelete = () => {
    //     // TODO = Make this work
    // }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Date: {!props.eventdate ? "TBD" : moment(props.eventdate).format('MMMM Do, YYYY')}</Card.Subtitle>
                <Card.Text>
                    Location: {props.location}
                </Card.Text>
                <button>Delete</button>
            </Card.Body>
        </Card>
    )
}

export default EventCard;