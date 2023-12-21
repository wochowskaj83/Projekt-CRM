const Customers = require('../models/CustomerModel');
const Customer = require('../models/CustomerModel');

module.exports = {
    index: (req, res) => {
        Customers.find({})
            .lean()
            .then((customers) => {
                console.log(customers)
                // res.render('tableViews/table', {customers: customers});

                return res.json(customers)
            }).catch((err) => {
                res.send(err)
            })
    },

    create: (req, res) => {

        Customer.findOne({ name: req.body.name })
            .then((response) => {
                console.log("customer" + response)

                if (response) {
                    res.json({
                        error: true,
                        message: 'Customer already exists'
                    })
                    return

                }
            })

        const newCustomer = new Customer(req.body)
        console.log(req)
        newCustomer.save({ new: true })
            .then((response) => {
                console.log(response)
                res.json(response)
                res.status(200)
                return
            })
            .catch((error) => {
                console.error(error);
            })
    },
}