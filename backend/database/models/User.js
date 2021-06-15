const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },

    mobile_no : {
        type : String,
        required : true,
        minlength : 10,
        maxlength : 10
    },

    email : {
        type : String,
        required : true,
    },

    address : {
        type : String
    },

    role : {
        type : String,
        required : true,
    },

    status : {
        type : String,
        required : true,
    },

    password : {
        type : String,
        required : true
    }
});

const User = mongoose.model('User',UserSchema);

module.exports = User;