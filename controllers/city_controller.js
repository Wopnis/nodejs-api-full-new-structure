const service = require('../services/city_service');

class UserCityController {
    constructor() {
    }

    getAllCities = async (req, res) => {
        try {
            const result = await service.getCities();
            res.status(200).send(result);
        } catch (err) {
            res.status(400).send({ error: err.message });
        }
    }

    getOwnCity = async (req, res) => {
        try {
            const result = await service.get(req.params.id);
            res.status(200).send(result);
        } catch (err) {
            res.status(400).send({ error: err.message });
        }
    }

    addNewCity = async (req, res) => {
        try {
            const result = await service.addNew(req.body);
            res.status(200).send(result);
        } catch (err) {
            res.status(400).send({ error: err.message });
        }
    }

    editCityData = async (req, res) => {
        try {
            const result = await service.edit(req.params.id, req.body);
            res.status(200).send(result);
        } catch (err) {
            res.status(400).send({ error: err.message });
        }
    }

    removeOne = async (req, res) => {
        try {
            const result = await service.remove(req.params.id);
            res.status(200).send(result);
        } catch (err) {
            res.status(400).send({ error: err.message });
        }
    }

}

module.exports = UserCityController; 

