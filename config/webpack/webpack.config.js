const productionConfig = require('./production.config');
const developConfig = require('./develop.config');


console.log('Looks like we are in ' + process.env.NODE_ENV + '  mode!');
module.exports = (process.env.NODE_ENV === 'production') ? productionConfig : developConfig;
