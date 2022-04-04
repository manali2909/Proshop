import express from 'express';
import { notFound , errorHandler } from './middleware/errorHandler.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
const app = express();

//body parser
app.use(express.json());

dotenv.config();

connectDB();

app.get('/',(req,res)=>{res.send('API is runnig');} )

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders',orderRoutes);

app.get('/api/config/paypal', (req,res)=> res.send(process.env.PAYPAL_CLIENT_ID))
app.use (notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000
app.listen(PORT , console.log(`Server started in ${process.env.NODE_ENV} at port ${PORT}`));