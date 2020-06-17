const request = require('superagent');

const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  request
          .get('http://api.yomomma.info/')
          .end((err, res) => {
            if (!err && res.status === 200) {
              try {
                JSON.parse(res.text);
              }
              catch (e) {
                return message.reply('the API returned an unconventional response.');
              }
              const joke = JSON.parse(res.text);
              message.channel.send(joke.joke);
            } else {
              console.error(`REST call failed: ${err}`);
            }
          });
    };

module.exports.help = {

    name: "yomomma"

}