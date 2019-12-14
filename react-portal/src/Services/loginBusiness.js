var webconfig = require('../Config/config.json')
var restTemplate = require('../Utils/restTemplate');

exports.signOn = (requestBody, callback) => {
    console.log(webconfig.apiendpoint)
    console.log('requestBody:' + requestBody)
    return restTemplate.makeApiCall('POST', requestBody, null, null, webconfig.apiendpoint + '/process/signOn', callback);
}