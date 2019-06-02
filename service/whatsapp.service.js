const client = require('twilio')(process.env.SID, process.env.KEY);
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const helper = require('../shared/helper');


//https://www.twilio.com/docs/sms/whatsapp/api#formatting-in-whatsapp-messages

exports.sendMessage = (text, response) => {
    const twiml = new MessagingResponse();
    const message = twiml.message();
    message.body(text);
    response.status(200).send(twiml.toString());
}

exports.sendMessageWithURL = (text, mediaURL, response) => {
    const twiml = new MessagingResponse();
    const message = twiml.message();
    message.body(text);
    if (helper.validateURL(mediaURL)) {
        message.media(mediaURL);
    }
    response.status(200).send(twiml.toString());
}



