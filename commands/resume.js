module.exports.run = async (bot, message, args, opts) => {
 
    // Fetch data.
    var guildIDData = opts.active.get(message.guild.id);
 
    // Check if any songs are already being played.
    if (!guildIDData) return message.channel.send("There are no songs playing at this moment.");
 
    // Check if user is in the same voice channel as the bot.
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("You are currently not in the same voice channel as the bot.");
 
    // Check if the song has already been paused.
    if (!guildIDData.dispatcher.paused) return message.channel.send("The song has not been paused");
 
    // Resume song.
    guildIDData.dispatcher.resume();
 
    // Send message.
    message.channel.send(`Succesfully resumed **${guildIDData.queue[0].songTitle}**.`);
 
}
 
module.exports.help = {
    name: "resume"
}