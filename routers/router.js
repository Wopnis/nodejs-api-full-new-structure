const express = require('express');
const router = new express.Router();


const UsersController = require('../controllers/controller');
const users_controller = new UsersController();



router.get('/users', users_controller.getUsers);
router.get('/users/:id', users_controller.getUserById);
router.put('/users/:id', users_controller.editUser);
router.post('/users', users_controller.createUser);
router.delete('/users/:id', users_controller.removeUser);

module.exports = router;

// password db:  @HqF##nLL3$*Qh8

// url:    mongodb+srv://gear800306:<password>@cluster0-0bdii.mongodb.net/test?retryWrites=true&w=majority
// start MongoDb    "C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe"