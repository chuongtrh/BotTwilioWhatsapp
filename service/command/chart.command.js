const whatsappService = require('../whatsapp.service');
const s3Service = require('../s3.service');

exports.onChart = (command, argvs, response) => {
    argvs.shift();
    var mallName = argvs.length > 0 ? argvs[0] : 'Unknow';
    var data = {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Contracts',
                data: [helper.randomInRange(500),
                helper.randomInRange(500),
                helper.randomInRange(500),
                helper.randomInRange(500),
                helper.randomInRange(500)]
            }]
        }
    };
    var chartURL = helper.getURLChartFromData(data);
    console.log('chartURL', chartURL);
    s3Service.uploadURLImageToS3(chartURL)
        .then(s3URL => {
            console.log('s3URL', s3URL);
            var text = `*${mallName}*`
            whatsappService.sendMessageWithURL(text, s3URL, response);
        })
        .catch(err => {
            console.log('err', err);
        })
}