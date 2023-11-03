const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')

// router.get('/signup', (_req, res) => {
//     res.render('userViews/signupUser')
// });


router.post('/signup', UserController.create);


module.exports = router;