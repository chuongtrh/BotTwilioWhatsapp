const whatsappService = require('../whatsapp.service');

exports.onImageLoremflickr = (command, argvs, response) => {
    argvs.shift();
    var urlImage = 'https://loremflickr.com/320/240';
    if(argvs.length > 1){
        var query = argvs.join(',');
        urlImage = `https://loremflickr.com/g/320/240/${query}/all`
    }

    console.log('image', urlImage);
    var text = ``
    whatsappService.sendMessageWithURL(text, urlImage, response);
}   

exports.onImageUnsplash = (command, argvs, response) => {
    argvs.shift();
    var urlImage = 'https://source.unsplash.com/featured/';
    if(argvs.length > 0){
        var query = argvs.join(',');
        urlImage = `https://source.unsplash.com/featured/?${query}`
    }
    console.log('image', urlImage);
    var text = ``
    whatsappService.sendMessageWithURL(text, urlImage, response);
}   
