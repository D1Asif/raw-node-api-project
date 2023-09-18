// Title: sample handler
// Description: sample handler
// Author: Dewan Asif 
// Date: 8/9/2023

//module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(200, {
        message: 'This is a sample url'
    });
};

module.exports = handler;