// Title: Project Initial File
// Description: Initial file to start the node server and the workers
// Author: Dewan Asif 
// Date: 17/9/2023


// dependencies
const server = require('./lib/server');
const workers = require('./lib/worker');

// app object - module scaffolding
const app = {};

app.init = () => {
    // start the server
    server.init();
    // start the workers
    workers.init();
}

app.init();

//export the app
module.exports = app;