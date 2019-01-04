/**
 * Renders pages relating to login or user registration
 */
const {storeUserData, getUserData} = require('../models/databaseQueries');

/**
 * Method that will render the login page
 *
 * @param request: Express request object
 * @param response: Express response object
 * @param next: Express callback
 * @returns {Promise<void>}
 */
module.exports.loginUser = async (request, response, next) => {
  response.render('login');
};

/**
 * Method that will render the register user page
 *
 * @param request: Express request object
 * @param response: Express response object
 * @param next: Express callback
 * @returns {Promise<void>}
 */
module.exports.registerUser = async (request, response, next) => {
  response.render('register');
};

module.exports.registerSubmit = async (request, response, next) => {
  var email = request.body.email_field;
  var password = request.body.password_field;
  var firstName = request.body.firstName;
  var lastName = request.body.lastName;
  storeUserData(email, password, firstName, lastName);

  response.sendStatus(200);
};