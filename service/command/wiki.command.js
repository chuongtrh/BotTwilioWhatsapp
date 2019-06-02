const whatsappService = require('../whatsapp.service');
const wikiService = require('../wiki.service');


exports.onWiki = (command, argvs, response) => {
    argvs.shift();
    var query = argvs.join(' ');

    wikiService.queryWiki(query)
        .then(output => {
            if (output.isFound === 1) {
                var text = `*${query}*\n${output.abstract}\nRef:${output.refURL}`
                whatsappService.sendMessageWithURL(text, output.imageURL, response);
            } else {
                var text = `*${query}*\nNot found ^_^`
                whatsappService.sendMessage(text, response);
            }
        })
        .catch(err => {
            console.log('err', err);
        })
}