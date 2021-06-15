const mongoose = require('mongoose');

const DeniedConnectionSchema = new mongoose.Schema({
    connection_id : {
        type : String,
        required : true,
    },

    reason : {
        type : String,
        required : true,
    },

    incharge_id : {
        type : String,
        required : true
    }

});

const DeniedConnection = mongoose.model('DeniedConnection',DeniedConnectionSchema);

module.exports = DeniedConnection;