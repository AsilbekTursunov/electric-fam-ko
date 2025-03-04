import axios from 'axios'

const API_URL = 'http://localhost:3000' // Replace with your actual API URL

const dbJsonService = {
  // Get all users
  getUsers() {
    return axios.get(`${API_URL}/users`)
  },

  // Get user by userNumber
  getUserByUserName(userNumber) {
    return axios.get(`${API_URL}/users?userNumber=${userNumber}`)
  },

  // Create a new user
  createUser(userData) {
    return axios.post(`${API_URL}/users`, userData)
  },

  // Update a user by userNumber
  updateUser(userNumber, userData) {
    return axios.put(`${API_URL}/users/${userNumber}`, userData)
  },

  // Delete a user
  deleteUser(userNumber) {
    return axios.delete(`${API_URL}/users/${userNumber}`)
  },

  // Get all cards
  getCards() {
    return axios.get(`${API_URL}/card`)
  },

  // Get all cards
  getCardsByUserNumber(userNumber) {
    return axios.get(`${API_URL}/card?userNumber=${userNumber}`)
  },

  // Get all cars
  getCars() {
    return axios.get(`${API_URL}/car`)
  },

  // Get guest applications
  getGuestApplications() {
    return axios.get(`${API_URL}/guestApplication`)
  },

  // Get guest application by ID
  getGuestApplicationById(id) {
    return axios.get(`${API_URL}/guestApplication/${id}`)
  },

  // Get food applications
  getFoodApplications() {
    return axios.get(`${API_URL}/foodSaveFoodApplication`)
  }
}

export default dbJsonService