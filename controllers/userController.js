const userService = require('../services/userService');

function getUsers ( req, res ) {
    const users = userService.getAllUsers();

    return res.status(200).json(users);
};

function getUserById(req, res) {
    const id = parseInt(req.params.id);
    const user = userService.getUserById(id)

    if(!user) {
        return res.status(404).json({message: 'User not fund'});
    }

    return res.status(200).json(user);
}

function createUser(req, res) {
    const {name, email} = req.body;

    if(!name || !email) {
        return res.status(400).json({message: 'Name and email is required'});
    }

    const newUser = userService.createUser({name, email});

    return res.status(201).json(newUser);
}

function deleteUser(req, res) {
    const id = parseInt(req.params.id);
    const deleted = userService.deleteUser(id);

    if(!deleted) {
        return res.status(404).json({message: 'User not found'})
    }

    return res.status(204).send();
}

module.exports = {
    getUsers, getUserById, createUser, deleteUser
};