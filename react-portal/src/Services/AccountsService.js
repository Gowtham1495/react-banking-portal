var webconfig = require('../Config/config.json')
var restTemplate = require('../Utils/restTemplate');

exports.getAccounts = (callback) => {
    console.log(webconfig.apiendpoint)
    return restTemplate.makeApiCall('GET', null, null, null, webconfig.apiendpoint + '/process/getAccountList', callback);
}