const search = require('yt-search');
 
module.exports.run = async (bot, message, args, opts) => {
 
    // Search for the song with the given args.
    search(args.join(' '), function (err, res) {
 
        // If an error occurs.
        if (err) return message.channel.send("Something has gone wrong...");
 
        // We're going to make a list with 10 videos.
        var videos = res.videos.slice(0, 10);
 
        // Added response.
        var response = '';
 
        // Every song is going to be in the list.
        for (var i in videos) {
 
            // Add ID to the message. We are doing i + 1 so that there won't be a 0 in front on the first song.
            // \r\n Start a new line with a space at the end of the line.
            response += `**[${parseInt(i) + 1}]:** ${videos[i].title} \r\n`;
 
        }
 
        response += `Choose a number between 1-${videos.length}.`;
 
        // Send message.
        message.channel.send(response);
 
        // Filter to check if you have given a number between 0 and the given numbers of from the list.
        const filter = music => !isNaN(music.content) && music.content < videos.length + 1 && music.content > 0;
 
        // Create a message collector with the chosen filter.
        const collection = message.channel.createMessageCollector(filter);
 
        // Put all the videos we find in our collection.
        collection.videos = videos;
 
        // If a message has been sent with a number between 0 and the chosen number then commence Play function.
        collection.once('collect', function (music) {
 
            // Fetch Play command.
            var commandFile = require('./play.js');
 
            // Commence Play and start song or add to list.
            commandFile.run(bot, message, [this.videos[parseInt(music.content) - 1].url], opts);
 
        });
 
    });
 
}
 
module.exports.help = {
    name: "ytsearch"
}