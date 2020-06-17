module.exports.run = async (bot, message, args, opts) => {
 
    // Fetch data.
    var guildIDData = opts.active.get(message.guild.id);
 
    // Check if any songs are already being played.
    if (!guildIDData) return message.channel.send("There are no songs playing at this moment.");
 
    // Check if you are in the same voice channel as the bot.
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("There are no songs playing at this moment.");
 
    // Check if the bot has been paused.
    if (guildIDData.dispatcher.paused) return message.channel.send("The song has already been paused.");
 
    // Pause the song.
    guildIDData.dispatcher.pause();
 
    // Send message.
    message.channel.send(`Succesfully paused **${guildIDData.queue[0].songTitle}**.`);
 
}
 
module.exports.help = {
    name: "pause",
}