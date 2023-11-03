const User = require('../models/UserModel');

module.exports = {
    create: (req, res) => {
        const newUser = new User(req.body)
        console.log(newUser)
        newUser.save({new:true})
        res.json(newUser)
        return res.status(200)
    }
}