const request = require('request');

exports.queryWiki = (query) => {
    var base = 'https://api.duckduckgo.com/?skip_disambig=1&format=json&pretty=1&q=';
    return new Promise((res, rej) => {
        request(base + query, function (error, response, body) {
            if (error) {
                rej(error);
            } else if (response && response.statusCode === 200) {
                body = JSON.parse(body)
                if (body) {
                    if (body["Abstract"] === "") {
                        if(body["RelatedTopics"] && body["RelatedTopics"].length > 0){
                            var relatedTopics = body["RelatedTopics"][0];
                        var refURL = relatedTopics['FirstURL'];
                        var imageURL = relatedTopics['Icon']['URL'];
                        var abstract = relatedTopics['Text'];
                        return res({
                            isFound: 1,
                            refURL,
                            imageURL,
                            abstract
                        })
                        }else{
                            console.log('body', JSON.stringify(body, null, 2));
                            return res({ isFound: 0 })
                        }
                        
                    } else {
                        var refURL = body['AbstractURL'];
                        var imageURL = body['Image'];
                        var abstract = body['Abstract'];
                        return res({
                            isFound: 1,
                            refURL,
                            imageURL,
                            abstract
                        })
                    }
                } else {
                    return res({ isFound: 0 })
                }
            } else {
                return res({ isFound: 0 })
            }
        });
    })
}