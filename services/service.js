const Users = require('../models/models');

const getAll = async function () {
    return await Users.find({})
}

const getUserById = async function (req) {
    return await Users.findById(req.params.id)
}

const update = async function (req) {
    return await  Users.findOneAndUpdate({ _id: req.params.id }, req.body)
}

const createUser = async function (req) {
   return await Users.create(req.body)
}

const remove = async function (req) {
    return await Users.deleteOne({ _id: req.params.id })
}

module.exports = {
    getAll,
    getUserById,
    update,
    createUser,
    remove
}

