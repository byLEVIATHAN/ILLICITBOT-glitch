const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

      const word = args.join(" ")
  if (word < 1) return message.channel.send("Didn't provide any text to embed")
  const embed = new discord.RichEmbed()
    .setDescription(word)
    .setColor("#7289DA");
  message.channel.send({embed});
}

module.exports.help = {

    name: "embed"

}