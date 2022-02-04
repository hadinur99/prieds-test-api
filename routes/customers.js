const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

router.get('/', async (req, res) => {
    // res.send('Customers route');
    try{
        const customers = await Customer.find();
        res.json(customers);
    }catch(err){
        res.json({message: err});
    }
});

router.get('/details', (req, res) => {
    res.send('Customers details route');
});

router.post('/', async (req, res) => {
    console.log(req.body);
    const customer = new Customer({
        site: req.body.site,
        productId: req.body.productId,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });

    try {
       const savedCustomer = customer.save()
        res.json(savedCustomer)
    }catch(err){
        res.json({message: err})
    }
    
});

//details

router.get('/:customerId', async (req, res) => {
    try{
        const customer = await Customer.findById(req.params.customerId);
        res.json(customer);
    }catch(err){
        res.json({message: err});
    }
})

module.exports = router;