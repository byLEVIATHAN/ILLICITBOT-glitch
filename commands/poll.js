const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    let warnchannel = message.guild.channels.find(`name`, "announcements");
  if(!warnchannel) return message.reply("Couldn't find the specified channel. Please create the channel if you haven'tt done so already.");
  if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("You do not meet the requirements to perform this action.");
  message.guild.channels.find("name", "announcements").send(`Poll by ${message.author.username}:\n${args.join(" ")}\n`)
    .then(function (message) {
      message.react("✅")
      message.react("❌")
      
    })
}




module.exports.help = {

    name: "poll"

}