const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var gayPerecent = Math.floor(Math.random() * 100)
  if(message.mentions.users.first()) {
    var user = message.mentions.users.first()
    var embed = new discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`${message.author.username} requested this command`)
    if(gayPerecent > 50) {
    embed.setDescription(`${user.username} is ${gayPerecent}% gay :rainbow:`)
    } else {
    embed.setDescription(`${user.username} is ${gayPerecent}% gay 👍`)
    }
      message.channel.send({embed});
  } else {
    var embed = new discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`${message.author.username} requested this command`)
    if(gayPerecent > 50) {
    embed.setDescription(`${message.author.username} is ${gayPerecent}% gay :rainbow:`)
    } else {
    embed.setDescription(`${message.author.username} is ${gayPerecent}% gay 👍`)
    }
      message.channel.send({embed});
  }
}



module.exports.help = {

    name: "gay"

}