module.exports.run = async (bot, message, args, ops) => {
 
    // Gegevens ophalen.
    var guildIDData = ops.active.get(message.guild.id);
 
    // Nakijken als er al een liedje aan het afspelen is.
    if (!guildIDData) return message.channel.send("There are no songs playing at this moment.");
 
    // Nakijken als de gebruiker in het kanaal zit van de bot.
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("You are currently not in the same voice channel as the bot.");
 
    // Nakijken wat de user meegeeft van volume. Als het te hoog wordt is de kwaliteit veel slechter.
    if (isNaN(args[0]) || args[0] > 150 || args[0] < 0) return message.channel.send("Please specify a number between 0 - 150.");
 
    // Het volume aanpassen.
    guildIDData.dispatcher.setVolume(args[0] / 100);
 
    // Bericht sturen.
    message.channel.send(`${guildIDData.queue[0].songTitle}'s volume changed to ${args[0]}`);
 
}
 
module.exports.help = {
    name: "volume"
}