const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

      try {
    message.reply('There are ' + message.guild.memberCount + ' members in this server!');
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

module.exports.help = {

    name: "members"

}