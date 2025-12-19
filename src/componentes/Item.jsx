import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Item = ({ prod }) => {
    return (
        <Card style={{ width: '18rem', margin: '1rem' }}>
            <Card.Img variant="top" src={prod.img} className='card-img' style={{ height: '250px', objectFit: 'cover' }} />
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Text>
                    ${prod.price},00
                </Card.Text>
                <Link className='btn btn-info' to={`/item/${prod.id}`}>
                    Ver Más
                </Link>

            </Card.Body>
        </Card>
    );
}

export default Item;