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
import { log } from 'console';

dotenv.config();

connectDB();

const app = express();

//body parser
app.use(express.json());

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders',orderRoutes);
app.use('/api/upload',uploadRoutes);

app.get('/api/config/paypal', (req,res)=> res.send(process.env.PAYPAL_CLIENT_ID))


const __dirname = path.resolve();

if(process.env.NODE_ENV === 'production'){
    console.log("in production if");
    app.use(express.static(path.join(__dirname, '/frontend/build')))
    
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
}else{
    console.log("in else");
    app.get('/', (req,res)=>{
        res.send('API is running');
    })
}

app.use(express.static(path.join(__dirname, '/frontend/public')))

app.use (notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000
app.listen(PORT , 
    console.log(`Server started in ${process.env.NODE_ENV} at port ${PORT}`)
);