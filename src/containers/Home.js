import { Container, Row, Col} from 'react-bootstrap';
import axios from "axios";
import { useState, useEffect } from "react";

import Product from '../components/Product';

const PRODUCTS_API_URL = 'https://nevo-json-server.herokuapp.com/products';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(PRODUCTS_API_URL)
        .then(response => setProducts(response.data));
    }, []);

    const productList = products.map(product => {
        return (<Col sm={6} md={4} className="my-3"><Product product={product} /></Col>);
    });

    return(
        <Container>
            <Row>
                {productList}
            </Row>
        </Container>
    )
}

export default Home;