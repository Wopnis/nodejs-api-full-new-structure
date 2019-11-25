const userCity = require('../models/city_model');
const ObjectId = require('mongodb').ObjectID;

const getCities = async ()=> {
    return await userCity.find({});
}

const get = async id => {
    const result = await userCity.aggregate([
        {
            $match: { _id: ObjectId(id) }
        },
        {
            $lookup: {
                from: 'users',
                localField: '_id',
                foreignField: 'city',
                as: 'UserSity'
            }
        }
    ]);
    return result
};

const addNew = async body => {
    const city = new userCity(body);
    return await city.save();
};

const edit = async (id, body) => {
    return await userCity.findByIdAndUpdate({_id: req.params.id }, body);
};

const remove = async id => {
    return await userCity.findByIdAndDelete({_id: req.params.id });
};

module.exports = {
    getCities,
    get,
    addNew,
    edit,
    remove
};