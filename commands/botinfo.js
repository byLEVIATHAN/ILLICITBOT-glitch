const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.RichEmbed()
            .setDescription("Discord Bot Info")
            .setColor("#db2a41")
            .setThumbnail(botIcon)
            .addField("Botname", bot.user.username)
            .addField("Created on", bot.user.createdAt);

        return message.channel.send(botEmbed);


}

module.exports.help = {

    name: "botinfo"

}