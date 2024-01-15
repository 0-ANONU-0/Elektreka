import React from 'react'
import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = await axios.get('/api/products');
      setProducts(data);
    } 

    fetchProducts();
  }, []); //the 2nd argument [] is array of dependencies, if smth inside and that value changes useEffect runs. If want to run useEffect once leave empty.

  return (
    <>
      <h1 className='product-header'>Latest Products</h1>
      <Row>
        {products.map( (product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>
            </Col>
        ))}
      </Row>
    </>
  )
}

export default Home
