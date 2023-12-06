const Customers = require('../models/CustomerModel');
module.exports = {
    index: (req, res) => {
        Customers.find({})
        .lean()
        .then((customers)=>{
            console.log(customers)
            // res.render('tableViews/table', {customers: customers});

            return res.json(customers)
        }).catch((err) => {
            res.send(err)
        })
    }
}