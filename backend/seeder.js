import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB  from './config/db.js'

dotenv.config();

connectDB();

const importData =async()=>{
   try{
       //deleting if ant user already in db
        await Order.deleteMany()
        await User.deleteMany()
        await Product.deleteMany()
        
        //inserting users data from file to DB
        const createdusers = await User.insertMany(users);
        
        //getting the admin user
        const adminUser= createdusers[0]._id;
        
        //creating product array by adding created by user 
        const sampleProduct = products.map(p=>{
            return {...p , user:adminUser}
        })
        await Product.insertMany(sampleProduct);
        console.log("Data inserted");
   }catch(error){
        console.error(`${error}`);
        process.exit(1);
   } 
}

const destroyData =async()=>{
    try{
        //deleting if ant user already in db
         await Order.deleteMany()
         await User.deleteMany()
         await Product.deleteMany()
         
         console.log("Data delted");
    }catch(error){
         console.error(`${error}`);
         process.exit(1);
    } 
}

if(process.argv[2]==='-d'){
    destroyData()
}else{
    importData()
}
