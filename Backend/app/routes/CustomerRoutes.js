const express = require('express');
const router = express.Router();
const CustomersController = require('../controllers/CustomersController');
const CustomerIdController = require('../controllers/CustomerIdController');


router.get('/list', CustomersController.index);
router.get('/id/:id', CustomerIdController.post);


module.exports = router;