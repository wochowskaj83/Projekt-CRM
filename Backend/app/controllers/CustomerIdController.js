const CustomerId = require('../models/CustomerModel');
module.exports = {
    getAll: (req, res) => {
        CustomerId.findById(req.params.id)
        .lean()
        .then((customer)=>{

            return res.json(customer)
        }).catch((err) => {
            res.send(err)
        })
    }
}