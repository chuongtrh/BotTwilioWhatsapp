const whatsappService = require('../whatsapp.service');

exports.onHelp = (command, argvs, response) => {
    var text = `*I'm bot 🤖*
*/hi* -> Say hi
*/chart* -> Show chart
*/help* -> Show list command
*/wiki* -> Query from wiki
*/loremflickr* -> Random photo from loremflickr
*/unsplash* -> Random photo from unsplash

`
    whatsappService.sendMessage(text, response);
}
