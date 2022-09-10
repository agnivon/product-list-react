import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PRODUCTS_API_URL = 'https://nevo-json-server.herokuapp.com/products';

const ProductDetails = () => {
    const [product, setProduct ] = useState({});
    const params = useParams();
    
    useEffect(() => {
        axios.get(PRODUCTS_API_URL + `?id=${params.id}`)
        .then(response => setProduct(response.data[0]));
    }, [params.id]);

    return(
        <Container>
            <h1 className="display-3">{product.name}</h1>
            <hr />
            <Row md={2}>
                <Col sm={12} className="text-center">
                    <img src={product.img} alt={product.name} className="img-fluid" style={{ minWidth: '200px' }}/>
                </Col>
                <Col sm={12}><p className="lead">
                        {product.description}
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductDetails;