const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var icon = message.guild.iconURL;


    var serverEmbed = new discord.RichEmbed()
        .setDescription("Illicit Server Info")
        .setColor("#db2a41")
        .setThumbnail(icon)
        .addField("Botname", bot.user.username)
        .addField("You have joined the server on", message.member.joinedAt)
        .addField("Total Members", message.guild.memberCount);


    return message.channel.send(serverEmbed);


}

module.exports.help = {

    name: "serverinfo"

}