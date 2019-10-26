var request = require('request');
var cheerio = require('cheerio');


request('https://www.fool.com/earnings/call-transcripts/2019/10/15/johnson-johnson-jnj-q3-2019-earnings-call-transcri.aspx', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        $('p').each(function (i, element) {
            var p = $(this).after();
            var speaker = p.children().text();

            // var speaker = p.text();
            // var speaker = $(this).prev();
            // var text = $()
            // console.log(p.text());
            // console.log(speaker);
            console.log(speaker)
        });
    }
});