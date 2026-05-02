const express = require('express');
const userController =  require('../controllers/userController.js')

const router = express.Router();

router.get('/users', userController.getUsers);   
router.get('/user/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;    