const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

     try {
    message.channel.send(new discord.Attachment('https://cdn.discordapp.com/attachments/502236124308307968/556413748416479242/images16.gif'));
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

module.exports.help = {

    name: "gamergirl"

}