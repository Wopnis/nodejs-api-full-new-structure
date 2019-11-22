const service = require('../services/service');

class UsersController {
    constructor() {}
    getUsers = async (req, res) => {
        try {
            const result = await service.getAll(req)
            res.status(201).send(result)
        } catch (e) {
            res.status(400).send({ error: e.message })
        }
    }

    getUserById = async (req, res) => {
        try {
            const result = await service.getUserById(req)
            res.status(201).send(result)
        } catch (e) {
            res.status(400).send({ error: e.message })
        }
    }

    editUser = async (req, res) => {
        try {
            const result = await service.update(req)
            res.status(201).send(result)
        } catch (e) {
            res.status(400).send({ error: e.message })
        }
    }

    createUser = async (req,res) => {
        try {
            const result = await service.createUser(req)
            res.status(201).send(result)
        } catch (e) {
            res.status(400).send({ error: e.message })
        }
    }

    removeUser = async (req, res) => {
        try {
            const result = await service.remove(req)
            res.status(201).send(result)
        } catch (e) {
            res.status(400).send({ error: e.message })
        }
    }
}

module.exports = UsersController;