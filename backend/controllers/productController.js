import Products from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

const getProducts = asyncHandler(async (req, res)=>{
    const products = await Products.find({})
    res.json(products);
})

const getProductById = asyncHandler(async (req, res)=>{
    let product = await Products.findById(req.params.id)
    if(product) 
       {res.json(product);} 
    else {
        res.status(404)
        throw new Error('Product not found');
    }
})

export  {getProducts ,getProductById}
