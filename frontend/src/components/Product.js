import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Rating from "../components/Rating";

const Product = ({product}) => {
  return (
    <>
      <Card className="my-3 p-3 rounded main-card">
        <Link to={`/product/${product._id}`} className='prod-link'>
            <Card.Img src={product.image} variant='top' />
        </Link>
        <Card.Body>
        <Link to={`/product/${product._id}`} className='prod-link'>
            <Card.Title as="div" className='product-title'>
                <strong>{product.name}</strong>
            </Card.Title>
        </Link>
        <Card.Text as="div">
            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </Card.Text>
        <Card.Text as="h3" className='prod-price'>
            ${product.price}
        </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Product
