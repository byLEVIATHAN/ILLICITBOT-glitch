const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    let embed = new discord.RichEmbed()
  .setThumbnail("http://logok.org/wp-content/uploads/2014/05/Paypal-logo-pp-2014.png")
  .setDescription("Thank you for considering donating, funding the development of the bot and just our community overall is very much appreciated!")
  .setColor(0x00A2E8)
  .addField("Paypal Pool", "https://paypal.me/pools/c/8jaCI1cLoZ")
  message.channel.send({embed});
}



module.exports.help = {

    name: "donate"

}