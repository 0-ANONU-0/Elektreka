import express from 'express';
import dotenv from 'dotenv';
dotenv.config(); //call before usin any env variable
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';

const port = process.env.PORT || 8000;

connectDB(); // connect to mongoDB

const app = express(); //initialize express

app.get('/', (req, res) => {
    res.send('API is running...')
});

app.use('/api/products', productRoutes); // if the route passed is hit, we go to the product routes file.

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server running on port: ${port}`));