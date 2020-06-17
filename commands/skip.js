const discord = require("discord.js");
 
module.exports.run = async (bot, message, args, opts) => {
 
    // Fetch the serverID for the data.
    var guildIDData = opts.active.get(message.guild.id);
 
    // Check if any songs are already being played.
    if (!guildIDData) return message.channel.send("There are no songs playing at this moment.");
 
    // Check if you are in the same voice channel as the bot.
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("You are currently not in the same voice channel as the bot.");
 
    // Fetch the amount of users in the voice channel.
    var amountUsers = message.member.voiceChannel.members.size;
 
    // Check the amount of users needed to skip.
    var amountSkip = Math.ceil(amountUsers / 2);
 
    // We have to add data to our already existing data so we have to create an array with the ID's of the users who have already voted.
    if (!guildIDData.queue[0].voteSkips) guildIDData.queue[0].voteSkips = []; 
 
    // You cannot vote twice.
    if (guildIDData.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`Sorry you have already voted once. ${guildIDData.queue[0].voteSkips.length}/${amountSkip}`);
 
    // Add data to the array.
    guildIDData.queue[0].voteSkips.push(message.member.id);
 
    // Update data.
    opts.active.set(message.guild.id, guildIDData);
 
    // Check if we can skip.
    if (guildIDData.queue[0].voteSkips.length >= amountSkip) {
 
        message.channel.send("Fetching next song in queue");
 
        // Call dispatcher Finish.
        return guildIDData.dispatcher.emit("end");
 
    }
 
    message.channel.send(`Added by skip request. ${guildIDData.queue[0].voteSkips.length}/${amountSkip}`);
 
}
 
module.exports.help = {
    name: "skip"
}