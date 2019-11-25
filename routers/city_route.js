const express = require('express');
const cityRouter = new express.Router();

const UserCityController = require('../controllers/city_controller');
const controller = new UserCityController();

cityRouter.get('/cities', controller.getAllCities);
cityRouter.get('/cities/:id', controller.getOwnCity);
cityRouter.put('/cities/:id', controller.editCityData);
cityRouter.post('/cities', controller.addNewCity);
cityRouter.delete('/cities/:id', controller.removeOne);

module.exports = cityRouter;