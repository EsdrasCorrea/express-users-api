const userRepository = require('../repositories/userRepository');

function getAllUsers() {
  return userRepository.findAll();
}

function getUserById(id) {
  return userRepository.findById(id);
}

function createUser(userData) {
  return userRepository.create(userData);
}

function deleteUser(id) {
  return userRepository.remove(id);
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
};