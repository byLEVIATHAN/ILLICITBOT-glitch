const discord = require("discord.js");
const superagent = require('superagent')

module.exports.run = async(bot, message, args) => {

      if (message.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'anal'})
    .end((err, response) => {
      message.channel.send({ file: response.body.message });
    });
  } else {
    message.channel.send("This isn't a NSFW channel!")
  }
};



module.exports.help = {

    name: "anal"

}