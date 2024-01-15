import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Image, Card, ListGroup, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';

const ProductPage = () => {

    const [product, setProducts] = useState([]);

    const { id: productId } = useParams(); // extract id from url

    useEffect(() => {
        //create a ftn fetch product that is async, which sets data to the value that axios gets from the api. Then the state product is set to datd 
        const fetchProduct = async () => {
            const {data} = await axios.get(`/api/products/${productId}`)
            setProducts(data);
        }

        fetchProduct();
    }, [productId]);

  return (
    <div className='prod-page-box'>
      <Row>
        <Col md={5}>
            <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
            <ListGroup>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </ListGroup.Item>
                <ListGroup.Item>
                    Price: {product.price}
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup>
                    <ListGroup.Item>
                        <Row>
                            <Col>Price:</Col>
                            <Col>{product.price}</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                         <Row>
                            <Col>Status:</Col>
                            <Col className={ product.countInStock > 0 ? 'prod-in-stock' : 'prod-out-stock' }>{product.countInStock > 0 ? 'InStock' : 'Out of Stock' }</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button className='btn-prod-page' type='button' disabled={product.countInStock === 0} >Add to Cart</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
            <h3>Description:</h3>
            <p>
                {product.description}
            </p>
        </Col>
      </Row>
    </div>
  )
}

export default ProductPage
