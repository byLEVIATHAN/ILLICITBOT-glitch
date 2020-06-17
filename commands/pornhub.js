const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

     if (!message.channel.nsfw) return message.channel.send('You can use this commands on NSFW Channel!')
  message.channel.send(`https://www.pornhub.com/video/search?search=${args.join("+")}`)
}

module.exports.help = {

    name: "pornhub"

}