const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

   
  message.delete();
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You can't do that.");
  let botmessage = args.join(" ");
  message.channel.send(botmessage);
}




module.exports.help = {

    name: "say"

}