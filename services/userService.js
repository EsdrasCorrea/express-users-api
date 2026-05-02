const users = [
    {
        id : 1,
        nome : 'Jonh Doe',
        email : 'jonh@email.com'
    },
    {
        id : 2,
        nome : 'Jane Doe',
        email : 'jane@email.com'
    }
];

function getAllUsers() {
    return users;
}

function getUserById(id) {
    return users.find((user)=> user.id === id)
}

function createUser(userData) {
    const newUser = {
        id: users.length + 1,
        ...userData
    }
    users.push(newUser);

    return newUser;
}

function deleteUser(id) {
    const index = users.findIndex((user) => user.id === id)
    if(index === -1){
        return false;
    }

    users.splice(index, 1);
    return true;
}

module.exports = {
    getAllUsers, getUserById, createUser, deleteUser
} 