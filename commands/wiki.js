const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

      message.channel.send(`https://en.wikipedia.org/wiki/${args.join("+")}`)
}




module.exports.help = {

    name: "wiki"

}