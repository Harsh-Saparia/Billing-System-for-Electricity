const mongoose = require('mongoose');

const ConnectionSchema = new mongoose.Schema({
    user_id : {
        type : String,
        required : true,
    },

    address : {
        type : String,
        required : true,
    },

    district : {
        type : String,
    },

    connection_type : {
        type : String,
        required : true,
    },

    status : {
        type : String,
        required : true,
    },

    address_proof : {
        type : String,
        required : true,
    },

    address_proof_type : {
        type : String,
        required : true,
    },

    user_id_proof : {
        type : String,
        required : true,
    },

    user_id_proof_type : {
        type : String,
        required : true,
    },

    request_date : {
        type : String,
    },

    connection_date : {
        type : String,
    },

    current_reading : {
        type : Number,
    },

    balance : {
        type : Number,
    }
});

const Connection = mongoose.model('Connection',ConnectionSchema);

module.exports = Connection;