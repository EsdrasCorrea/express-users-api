const fs = require('fs');
const path = require('path');

const databasePath = path.join(__dirname, '..', 'database', 'db.json');

function realDatabase (){
    const data = fs.readFileSync(databasePath, 'utf-8');
    return JSON.parse(data)
}

function writeDatabase(data){
    fs.writeFileSync(databasePath, JSON.stringify(data, null, 2));
}

function findAll() {
    const database = realDatabase();
    return database.users;
}

function findById(id) {
    const database = realDatabase();
    return database.users.find((user) => user.id === id);
}

function create(userData) {
    const database = realDatabase();

    const newUser = {
        id: Date.now(),
        ...userData,
    };

    database.users.push(newUser);

    writeDatabase(database);

    return newUser;
}

function remove(id) {
    const database = realDatabase();

    const userIndex = database.users.find((user) => user.id === id);

    if(userIndex === -1) {
        return false;
    }

    database.users.splice(userIndex, 1);

    writeDatabase(database);

    return true;
}

module.exports = {
    findAll, 
    findById, 
    create, 
    remove
};