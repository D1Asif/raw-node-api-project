// Title: Environments
// Description: Handle all environment related things
// Author: Dewan Asif 
// Date: 8/9/2023

// dependencies

// module scaffolding
const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey: 'sfveevebegrgqer',
    maxChecks: 5,
    twilio: {
        fromPhone: '+19286934695',
        accountSid: 'ACefde97b6adda993af7f666d466dd7ab8',
        authToken: 'a3da0e371f05865b9f9d96f53ad05851'
    }
};

environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'erfqegqgqegefe',
    maxChecks: 5,
    twilio: {
        fromPhone: '+19286934695',
        accountSid: 'ACefde97b6adda993af7f666d466dd7ab8',
        authToken: 'a3da0e371f05865b9f9d96f53ad05851'
    }
};

// determine which environment was passed
const currentEnvironment = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
const environmentToExport = typeof(environments[currentEnvironment]) === 'object' ? environments[currentEnvironment] : environments.staging;

// export module
module.exports = environmentToExport;
