// import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Image, Card, ListGroup, Button } from 'react-bootstrap';
import { useGetProductQuery } from '../slices/productApiSlice';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
// import axios from 'axios';

const ProductPage = () => {

    const { id:productId } = useParams();

    const {data: product, isLoading, error} = useGetProductQuery(productId);

  return (
    <>
        {isLoading ? (
            <Loader />
        ) : error ? (
            <Message variant='danger'>
          { error?.data?.message || error.error }
            </Message>
        ) : (<>
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
        </>)}
    </>
  )
}

export default ProductPage
