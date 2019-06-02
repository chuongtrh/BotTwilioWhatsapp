const whatsappService = require('../whatsapp.service');

exports.onHi = (command, argvs, response) => {
    var text = `*Hi 👋*\nI'm bot 🤖...`
    whatsappService.sendMessage(text, response);
}