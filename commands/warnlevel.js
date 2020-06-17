const discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async(bot, message, args) => {
  
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])

     if(!warns[user.id]) warns[user.id] = {
    warns: 0
  };
  
 
  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't do that.");
  
  if(!user) return message.reply("Couldn't find this user");
  let warnlevel = warns[user.id].warns;

  message.reply(`<@${user.id}> has ${warnlevel} warnings.`);


}

module.exports.help = {

    name: "warnlevel"

}