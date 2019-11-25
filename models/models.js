const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    id: Number,
    city: {
        type: mongoose.Schema.Types.ObjectId
    }
},
{versionKey: false });

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;

