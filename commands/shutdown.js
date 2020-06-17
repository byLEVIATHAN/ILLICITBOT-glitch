const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

     if(message.author.id != "254814619825078273") return message.channel.send("You're not the bot the owner!")

    try {let embed = new discord.RichEmbed()
          .setColor("#db2a41")
          .setTitle("Bot is shutting down!")
      await message.channel.send(embed);
        process.exit()
    } catch(e) {
        message.channel.send(`ERROR: ${e.message}`)
    }
    


}


module.exports.help = {

    name: "shutdown"

}