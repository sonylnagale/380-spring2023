import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Bio = () => {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/1263746?v=4" />
          <Card.Body>
            <Card.Title>Sonyl Nagale</Card.Title>
            <Card.Text>
              I code, I teach, I eat.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      );
}

export default Bio;
