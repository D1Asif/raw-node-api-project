// Title: Server Library
// Description: Server related files
// Author: Dewan Asif 
// Date: 17/9/2023


// dependencies
const http = require('http');
const {handleReqRes} = require('../helpers/handleReqRes');
const environment = require('../helpers/environments');
const data = require('./data');
// const {sendTwilioSms} = require('./helpers/notifications');

// server object - module scaffolding
const server = {};

// todo: remove later
// sendTwilioSms('01311933447', 'Hello world', (err) => {
//     console.log(`This is the error`, err);
// });

// testing file system
// @todo: pore muche dibo
// data.delete('test', 'newFile', (err) => {
//     console.log(err);
// });

// create server
server.createServer = () => {
    const createServerVariable = http.createServer(server.handleReqRes);
    createServerVariable.listen(environment.port, () => {
        console.log(`listening to port ${environment.port}`);
    })
}

// handle request response
server.handleReqRes = handleReqRes;

// start the server
server.init = () => {
    server.createServer();
}

// export
module.exports = server;