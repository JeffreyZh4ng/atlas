/**
 * Renders the home page
 */

/**
 * Method that will render the home page
 *
 * @param request: Express request object
 * @param response: Express response object
 * @param next: Express callback
 * @returns {Promise<void>}
 */
module.exports.loadHomePage = async (request, response, next) => {
  response.render('home', {title: "Atlas"});
};