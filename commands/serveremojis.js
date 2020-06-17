const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

   const emoji = message.guild.emojis;
  if (!emoji.size) return message.channel.send("Server has no emojis")
  const embed = new discord.RichEmbed()
  .setColor("RANDOM")
  .addField("Server Emojis", emoji.map((e) => e).join(' '))
  message.channel.send({embed})


}

module.exports.help = {

    name: "serveremojis"

}