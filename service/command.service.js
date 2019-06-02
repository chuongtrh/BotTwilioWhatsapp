const parseArgs = require('minimist');

const hiCommand = require('./command/hi.command');
const chartCommand = require('./command/chart.command');
const wikiCommand = require('./command/wiki.command');
const helpCommand = require('./command/help.command');
const imageCommand = require('./command/image.command');


exports.validate = (request, response, next) => {
    //console.log('request.body', request.body);
    var command = request.body.Body.toLowerCase().trim();
    var argv = parseArgs(command.split(' '), {
        '--': false,
        'string': true
    });
    if(argv._.length> 0 && argv._[0].indexOf('/') ===0){
        console.log('validate ok', argv._);
        request.argvs = argv._;
        request.command = argv._[0];
        next();
    }else{
        console.log('validate not ok');
        //next();
    }
};

exports.handle = (request, response) => {
    var argvs = request.argvs;
    var command = request.command;

    console.log('argvs', argvs);
    console.log('command', command);

    if (command === '/hi') {
        hiCommand.onHi(command, argvs, response);
    } else if (command === '/chart') {
        chartCommand.onChart(command, argvs, response);
    } else if (command === '/wiki') {
        wikiCommand.onWiki(command, argvs, response);
    } else if (command === '/loremflickr') {
        imageCommand.onImageLoremflickr(command, argvs, response);
    } else if (command === '/unsplash') {
        imageCommand.onImageUnsplash(command, argvs, response);
    } else if (command === '/help') {
        helpCommand.onHelp(command, argvs, response);
    } else {
        helpCommand.onHelp(command, argvs, response);
        console.log('Nothing');
    }
}