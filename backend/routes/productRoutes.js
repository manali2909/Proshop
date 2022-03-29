import express from'express'
import Products from '../models/productModel.js';
import asyncHandler from 'express-async-handler';
const router = express.Router()

// fetch all products
router.get('/', asyncHandler(async(req,res)=>{
    const products = await Products.find({})
    res.json(products);
}))

//fetch product by id
router.get('/:id', asyncHandler(async(req,res)=>{
    let product = await Products.findById(req.params.id)
    if(product) 
       {res.json(product);} 
    else {
        res.status(404)
        throw new Error('Product not found');
    }
}))

export default router;