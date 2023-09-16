const usersRepository = require('../repositories/usersRepository');

async function getUsers(req, res) {
    const users = await usersRepository.getUsers();
    res.json(users);
}

async function getUser(req, res) {
    id = req.params.id
    const user = await usersRepository.getUser(id);
    res.json(user);
}

async function insertUser(req, res) {
    user = req.body;
    await usersRepository.insertUser(user);
    res.sendStatus(201);
}

async function deleteUser(req, res) {
    id = req.params.id
    await usersRepository.deleteUser(id);
    res.sendStatus(200);
}


module.exports = {
    getUsers,
    getUser,
    insertUser,
    deleteUser
}