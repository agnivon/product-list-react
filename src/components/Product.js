import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    return (
        <Card>
            <Card.Img variant="top" src={props.product.img} />
            <Card.Body>
                <Card.Title>{props.product.name}</Card.Title>
                <Card.Text>
                    {props.product.description}
                </Card.Text>
            <Button as={Link} to={`/product/${props.product.id}`} variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
}

export default Product;