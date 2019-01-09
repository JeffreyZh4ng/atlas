/**
 * Renders pages relating to login or user registration
 */
const {createTrip} = require('../models/databaseQueries');

module.exports.createTrip = async (request, response, next) => {
	response.render('create');
};