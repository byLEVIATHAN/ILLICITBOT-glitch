const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    return message.channel.send(`on ${bot.guilds.size} servers`);


}

module.exports.help = {

    name: "serveramount"

}