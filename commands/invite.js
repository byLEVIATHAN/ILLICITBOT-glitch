const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


    return message.channel.send("You can send this invite link to recruit new members to the community. \n\n http://bit.ly/3a0N5aa");


}

module.exports.help = {

    name: "invite"

}