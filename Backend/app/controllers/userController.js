const User = require('../models/UserModel');
const bcrypt = require("bcrypt");

module.exports = {
    create: (req, res) => {
        const newUser = new User(req.body)
        console.log(newUser)
        newUser.save({ new: true })
        res.json(newUser)
        return res.status(200)
    },
    login: (req, res) => {
        User.findOne({ email: req.body.email })
            .then((user) => {

                if (!user) {
                    res.json({
                        error: true,
                        message: "That user doesn't exist",
                        user: req.body,
                    });
                    return;
                }

                if (bcrypt.compareSync(req.body.password, user.password)) {
                    const token = user.generateAuthToken(user);
                    res.status(200).send(token);
                    console.log("User logged in")
                } else {
                    res.status(401).send({
                        message: "Invalid email/password"
                    })
                }
            });
    }
}




