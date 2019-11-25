const mongoose = require('mongoose');

const userCityScheme = new mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    contry: {
        type: String,
        trim: true
    },
    id: {
        type: [mongoose.Schema.Types.ObjectId],
    }
});


const userCity = mongoose.model('City', userCityScheme);


module.exports = userCity;