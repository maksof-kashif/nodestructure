var userService = require('../daoServices/user_service');

exports.signup = async (req, res) => {
    try {
        userService.signup(req.body, (error, result) => {
        })
    } catch (e) {
        console.log(e);
    }
}