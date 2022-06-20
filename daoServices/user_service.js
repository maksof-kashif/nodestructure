const { response } = require('express');
var userdao  = require('../schema/user_schema');

exports.signup = async (body, cb) => {
    try {
        console.log("Data service working successfully");
    } catch(error){
        cb(error);
        console.log(error);
    }
}