// Title: Routes
// Description: Application routes
// Author: Dewan Asif 
// Date: 8/9/2023

// dependencies
const {sampleHandler} = require('./handlers/routeHandlers/sampleHandlers');
const {userHandler} = require('./handlers/routeHandlers/userHandler');
const {tokenHandler} = require('./handlers/routeHandlers/tokenHandler');
const {checkHandler} = require('./handlers/routeHandlers/checkHandler');

const routes = {
    'sample': sampleHandler,
    'user': userHandler,
    'token': tokenHandler,
    'check': checkHandler
};

module.exports = routes;