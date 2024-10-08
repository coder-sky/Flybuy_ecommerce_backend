require('dotenv').config();
const router = require('express').Router();

const Razorpay = require('razorpay');


const keyid= process.env.RAZORPAY_ID_KEY;
const keysecret = process.env.RAZORPAY_SECRET_KEY;




router.route('/order').post(function(req,res){
  var instance = new Razorpay({
    key_id: keyid,
    key_secret: keysecret
  })
var options = {
  amount: req.body.amount,  // amount in the smallest currency unit
  currency: "INR",
  receipt: "order_rcptid_11",
  
};
instance.orders.create(options, function(err, order) {

  if(err){
    return res.send(err)}
  else{
    console.log(order)
   return res.json(order)}
});
});

router.route('/payment').post(function(req,res) {
  console.log(req.body)
  res.send('Ok')
});

module.exports = router;