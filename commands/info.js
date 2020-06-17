const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

     let bicon = bot.user.displayAvatarURL;
  let botembed = new discord.RichEmbed()
  .setTitle("ILLICITBOT")
  .setDescription("ILLICITBOT is a Discord.js bot created by **byLEVIATHAN#6917**. If support is needed be sure to type $help to see all of my commands or just ask any of the staff on the server.")
  .setColor("#7289DA")
  .setThumbnail(bicon)

    message.channel.send(botembed);
}

module.exports.help = {

    name: "info"

}