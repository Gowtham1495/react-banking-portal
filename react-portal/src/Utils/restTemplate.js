var request = require('request');

exports.makeApiCall = (method, requestBody, formData, queryParams, endPoint, callback) => {
    if (method != null) {
        request({
            url: endPoint,
            body: requestBody,
            json: true,
            method: method,
            formData: formData,
            qs: queryParams
        }, function (error, httpResponse, body) {
            console.log('error', error);
            console.log('statusCode', httpResponse && httpResponse.statusCode);
            console.log('body', body);
            if (httpResponse && httpResponse.statusCode == 200) {
                var status = body.status;
                console.log(status);
                if (status === 'success') {
                    callback(null, body);
                }
                else if (status === 'FAILED') {
                    callback(new Error(body.errorMsg), null);
                }
                else {
                    callback(new Error('System is not available right now, please try again later.'), null);
                }
            }
            else {
                callback(new Error('System is not available right now, please try again later.'), null);
            }
        });
    }
}
