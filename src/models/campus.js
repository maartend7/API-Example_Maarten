const mongoose = require('mongoose');

const CampusSchema = new mongoose.Schema({
name: {type: String, required: true, minLength: 4, maxLength: 50},
location: {
    type: String, 
    required: true,
    enum: {values:['Geel', 'Lier', 'Turnhout'], message:"Je kunt enkel kiezen uit Geel, Lier of Turnhout" }  
    },
address: {type: String},
image: {type: String}

},{
    database:"campuses",
    collection: 'campus'
});

module.exports = mongoose.model('Campus', CampusSchema);