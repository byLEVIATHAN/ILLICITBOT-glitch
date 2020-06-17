const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

     message.channel.send(`I rate you a ${Math.floor(Math.random() * 100 + 1)}/100 on the dank scale.`)


}

module.exports.help = {

    name: "dank"

}