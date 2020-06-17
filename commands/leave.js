module.exports.run = async (bot, message, args) => {
 
    if (!message.member.voiceChannel) return message.channel.send("Please connect to a voice channel.");
 
    if (!message.guild.me.voiceChannel) return message.channel.send("I am already connected to a different voice channel.");
 
    if (message.guild.me.voiceChannelID != message.member.voiceChannelID) return message.channel.send("You are not connected to the same voice channel.");
 
    message.guild.me.voiceChannel.leave();
 
    message.channel.send("**Leaving voice channel...**");    
}
 
module.exports.help = {
    name: "leave",
}