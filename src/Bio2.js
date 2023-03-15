import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Bio2 = () => {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cdn.akc.org/content/hero/puppy_pictures_header.jpg" />
          <Card.Body>
            <Card.Title>Cute Puppy</Card.Title>
            <Card.Text>
              I code, I teach, I eat.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      );
}

export default Bio2;
