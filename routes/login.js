/**
 * Renders pages relating to login or user registration
 */

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