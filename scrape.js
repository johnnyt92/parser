var request = require('request');
var cheerio = require('cheerio');
var cspeaker = [] // Current speaker array
var text = [] // What the current speaker is saying
var speakertxt = cspeaker.concat(text) //add .toString?



request('https://www.fool.com/earnings/call-transcripts/2019/10/15/johnson-johnson-jnj-q3-2019-earnings-call-transcri.aspx', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        $('p').each(function (i, element) {
            var txt = $(this); // Pulls all text in P tags.
            var speaker = txt.children().text() //Pulls speakers name in <strong> 
            if (txt.children()) {
                // console.log(speaker);
                cspeaker.push(speaker); // Pushes speakers into an array
                console.log(cspeaker)
                // text.push(p);
                // for (let index = 0; index < cspeaker.length; index++) {
                //     const element = array[index]; // For loop to append what the speaker is saying to their name. Needs to stop when another <Strong> tag is found.
                
            } if (txt === speaker) {
                console.log("Yes")
            } {
        
                // console.log(text);
            }
            // var speakers = p.children().text(); //Pulls speaker's name in <strong> tags

            // var speaker = p.text();
            // var speaker = $(this).prev();
            // var text = $()
            // console.log(p.text());
            // console.log(speakers)
        });
    }
});