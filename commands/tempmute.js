const discord = require("discord.js");
const ms = require("ms");


module.exports.run = async(bot, message, args) => {

  // $tempmute @user + amount of time

  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("You do not meet the requirements to perform this action.");

  var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

  if(!user) return message.channel.send("Please insert a user or I could not find this user.");

  if(user.hasPermission("MUTE_MEMBERS")) return message.channel.send("Could not warn this user.");

  var muteRole = message.guild.roles.find("name", "Muted");

  if(!muteRole) return message.channel.send("Could not find this role.");

  var muteTime = args[1];

  if(!muteTime) return message.channel.send("Please insert the amount of time of this mute.");

  await (user.addRole(muteRole.id));

  message.channel.send(`${user} has been muted for ${muteTime}`);

  setTimeout(function() {

    user.removeRole(muteRole.id);

    message.channel.send(`${user} has been unmuted.`);

  }, ms(muteTime));


}

module.exports.help = {

    name: "tempmute"

}