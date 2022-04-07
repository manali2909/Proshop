import express from 'express';
import path from 'path';
import { notFound , errorHandler } from './middleware/errorHandler.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import morgan from 'morgan';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
const app = express();

//body parser
app.use(express.json());

console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
dotenv.config();

connectDB();


if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.get('/',(req,res)=>{res.send('API is runnig');} )

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders',orderRoutes);
app.use('/api/upload',uploadRoutes);

app.get('/api/config/paypal', (req,res)=> res.send(process.env.PAYPAL_CLIENT_ID))
app.use (notFound);
app.use(errorHandler);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/public')))

const PORT = process.env.PORT || 5000
app.listen(PORT , console.log(`Server started in ${process.env.NODE_ENV} at port ${PORT}`));