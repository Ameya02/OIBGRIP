const express = require('express');
const router = express.Router();
const {v4:uuidv4} = require('uuid');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Order = require('../models/orderModel');
router.post('/placeorder',async (req,res) => {
    
    const {token,address,TotalPrice,currentUser,cartItems} = req.body;
    console.log(address)
    try {
        {
            const newOrder = new Order( {
                name: currentUser.name,
                email: currentUser.email,
                userid:currentUser._id,
                orderItems:cartItems,
                orderAmount:total,
                shippingAddress:{
                    street:address.address_line1,
                    city:address.address_city,
                    country:address.address_country,
                    pincode:address.address_zip,

                },
                transactionID:uuidv4(),
            });
            newOrder.save();
            res.status(200).json({
                success: true,
                message: "Order is Successfully Recieved",

        });
        }
    } catch (error) {
        res.status(400).json({
            message:"Something went wrong"
        })
    }
})
router.get('/getorders',async (req,res) => {
    try {
        const  orders = await Order.find({})
        res.send(orders)
    } catch (error) {
        res.json({message:error})
    }

})
router.post('/statuschange', async (req, res) => {
    try {
            const {status,orderID} = req.body;
            console.log(orderID)
            Order.updateOne({_id:orderID},{status:status},(err,data) => {
                res.status(200).json({
                    success: true,
                    message: "Order is Successfully Recieved",
    
            });
            })
    }
    catch (error) {
        res.status(400).json({message:error})
    }
})
module.exports = router;