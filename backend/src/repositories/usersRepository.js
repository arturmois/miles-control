const userModel = require('../models/userModel');

function getUsers() {
    return userModel.findAll();
}

function getUser(id) {
    return userModel.findByPk(id);
}

function insertUser(user) {
    return userModel.create(user);
}

function deleteUser(id) {
    return userModel.destroy({ where: { id } });
}

module.exports = {
    getUsers,
    getUser,
    insertUser,
    deleteUser
}