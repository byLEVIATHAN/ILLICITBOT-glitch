const discord = require("discord.js");

module.exports.run = async(bot, message, args, opts) => {

     const audioUrl = message.content.split(' ');
    var convertTrack;

    let fetched = opts.active.get(message.guild.id);
    if(!fetched)
        return message.channel.send("There isn't any music playing right now!");
    let queue = fetched.queue;

    if(queue.length == 1){
        return message.channel.send("There are no songs in the queue to remove!");
    }

    try{
        convertTrack = parseInt(audioUrl[1]);

        if(convertTrack > (queue.length))
            return message.channel.send("I couldn't remove the song from the queue!");

        message.channel.send(`The track **${fetched.queue[convertTrack].songTitle}** has been removed from the queue`); 

        queue.splice(convertTrack, 1);    

    }

    catch(error){
        return message.channel.send("You did not enter an integer number!");
    }


}

module.exports.help = {

    name: "removesong"

}