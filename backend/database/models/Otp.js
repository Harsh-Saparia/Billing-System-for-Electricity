const mongoose = require('mongoose');

const OtpSchema = new mongoose.Schema({
    mail : {
        type : String,
        required : true,
    },

    otp : {
        type : String,
        required : true,
    },

    time : {
        type : Number,
        required : true
    }
});

const Otp = mongoose.model('Otp',OtpSchema);

module.exports = Otp;