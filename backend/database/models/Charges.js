const mongoose = require('mongoose');

const ChargesSchema = new mongoose.Schema({
    connection_type : {
        type : String,
        required : true,
    },

    fixed_charge : {
        type : Number,
        required : true,
    },

    fuel_charge : {
        type : Number,
        required : true,
    },

    electricity_charge : {
        type : Number,
        required : true,
    },

    connection_charge : {
        type : Number,
        required : true,
    }
});

const Charges = mongoose.model('Charges',ChargesSchema);

module.exports = Charges;