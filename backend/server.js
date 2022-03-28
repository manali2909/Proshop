const express = require('express');
const products = require('./data/products');

const app = express();

app.get('/',(req,res)=>{res.send('API is runnig');} )

app.get('/api/products', (req,res)=>{
    res.json(products);
})
app.get('/api/products/:id', (req,res)=>{
    let product = products.find(p=> p._id === req.params.id);
    res.json(product);
})
app.listen(5000 , console.log("Server started at port 5000"));