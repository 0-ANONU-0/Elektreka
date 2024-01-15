import express from 'express';
import dotenv from 'dotenv';
dotenv.config(); //call before usin any env variable
import products from './data/product.js';
import connectDB from './config/db.js'

const port = process.env.PORT || 8000;

connectDB(); // connect to mongoDB

const app = express(); //initialize express

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.get('/api/products', (req, res) => {
    res.send(products);
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
})

app.listen(port, () => console.log(`server running on port: ${port}`));