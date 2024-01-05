const express = require('express');
const router = express.Router();
const CustomersController = require('../controllers/CustomersController');
const CustomerIdController = require('../controllers/CustomerIdController');

router.get('/list', CustomersController.index);
router.get('/:id', CustomerIdController.getAll);
router.post('/addcustomer', CustomersController.create);
router.delete('/delete/:id', CustomersController.delete);

module.exports = router;