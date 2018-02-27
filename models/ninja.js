const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create ninja schema & model

const NinjaSchema = new Schema({
    name:{
        type: String,
        required: [true, "Name field is required"]
    },
    rank:{
        type: String
    },
    available:{
        type: Boolean,
        default: false
    }
    //add in geolocation data later
});

const Ninja = mongoose.model('ninja',NinjaSchema);
//mongo will create a collection with the plural of the name, 'ninjas'

module.exports = Ninja;