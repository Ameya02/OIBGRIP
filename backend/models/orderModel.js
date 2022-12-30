const mongoose = require('mongoose')
const orderSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'ORDER NAME REQUIRED']
    },
    email: {
        type:String,
        required:[true,'EMAIL IS REQUIRED']
    },
    userid: {
        type:String,
    },
    orderItems:[],
    shippingAddress: {type:Object},
    orderAmount:{
        type:String,
    },
    isDeilivered:{
        type:String,
        
    },
    transactionID:{
        type:String,
    },
    status:{
        type:String,
        default:"placed"
    }


},{timeStamps:true})
const Order = mongoose.model('order',orderSchema);
module.exports = Order;