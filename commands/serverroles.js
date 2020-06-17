const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

     const role = message.guild.roles;
  const embed = new discord.RichEmbed()
    .addField("Server Roles", role.map((e) => e).join(', '))
  message.channel.send({embed}) 
}
   


module.exports.help = {

    name: "serverroles"

}