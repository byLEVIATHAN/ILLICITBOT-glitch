const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

   
    let autogoogle = args.join('+');
    if (autogoogle.length < 1) return message.reply('You must supply a LMGTFY.').catch(console.error);
    const embed = new discord.RichEmbed()
        .setColor(0x738BD7)
        .setDescription(`Here you go, **${message.author.username}**: http://lmgtfy.com/?q=` + (args.join('+')))
    message.channel.send({embed})
}




module.exports.help = {

    name: "lmgtfy"

}