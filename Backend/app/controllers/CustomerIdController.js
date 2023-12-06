const CustomerId = require('../models/CustomerModel');
module.exports = {
    post: (req, res) => {
        CustomerId.findById(req.params.id)
        .lean()
        .then((customer)=>{
            console.log(customer)

            return res.json(customer)
        }).catch((err) => {
            res.send(err)
        })
    }
}