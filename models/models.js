const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    id: Number
});
const Users = mongoose.model('Users', usersSchema);

module.exports = Users;

