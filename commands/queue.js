module.exports.run = async (bot, message, args, opts) => {
 
    // Fetch the serverID for the Data.
    var guildIDData = opts.active.get(message.guild.id);
 
    // Check if any songs are already being played.
    if (!guildIDData) return message.channel.send("There are no songs playing at this moment.");
 
    // Fetch data.
    var queue = guildIDData.queue;
    var nowPlaying = queue[0];
 
    // Eerst een lijn met het liedje dat al speelt.
    var response = `Now playing **${nowPlaying.songTitle}** || Requested by **${nowPlaying.requester}**\n\n***Queue:*** \n`;
 


    // Add every song in queue to the message.
    for (var i = 0; i < queue.length; i++) {
 
        response += `*${i}*, **${queue[i].songTitle}** Requested by **${queue[i].requester}**\n`;
 
    }
   
    // Send message.
    message.channel.send(response);
 
}
 
module.exports.help = {
    name: "queue",
}