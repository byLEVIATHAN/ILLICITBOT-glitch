const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

     
    var random = Math.ceil(Math.random() * 20);
  var embed = new discord.RichEmbed()
    .setDescription(`You rolled a ${random}`)
    .setColor("RANDOM")
  message.channel.send("", {
    embed: embed
  });
}







module.exports.help = {

    name: "dice"

}