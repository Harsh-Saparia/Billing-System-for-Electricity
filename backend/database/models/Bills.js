const mongoose = require('mongoose');

const BillSchema = new mongoose.Schema({
    user_id : {
        type : String,
        required : true,
    },

    connection_id : {
        type : String,
        required : true,
    },

    billing_date : {
        type : Date,
        required : true,
    },

    current_reading : {
        type : Number,
        required : true,
    },

    last_reading : {
        type : Number,
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

    current_bill : {
        type : Number,
        required : true,
    },

    previous_due : {
        type : Number,
    },

    total_bill : {
        type : Number,
        required : true,
    },

    status : {
        type : String,
        required : true,
    }
});

const Bill = mongoose.model('Bill',BillSchema);

module.exports = Bill;