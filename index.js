const AWS = require('aws-sdk');
const sns =  new AWS.SNS({apiVersion: '2010-03-31'});

exports.handler = async (event) => {
    var snsParams = {
            Message: 'How are you brah?', 
            PhoneNumber: '+6281804004160', 
        };

    let snsPush

    try {
        snsPush = await sns.publish(snsParams).promise()
        console.log(snsPush)
    } catch (e) {
        console.log(e)
    }

    const response = {
        statusCode: 200,
        snsData: snsPush
    };

    return response;
};