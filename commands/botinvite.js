const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

     let adminInviteLink = "https://discordapp.com/api/oauth2/authorize?client_id=628602431923552276&scope=bot&permissions=8";
    let InviteLink = "https://discordapp.com/api/oauth2/authorize?client_id=628602431923552276&scope=bot&permissions=199680"
    let biembed = new discord.RichEmbed()
    .setTitle(`**__Invite ${bot.user.username} to your server__**:`)
    .setColor("RANDOM")
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("**__Admin Invite Link__**:", adminInviteLink)
    .addField("**__Normal Invite Link__**:", InviteLink)
    .setAuthor(bot.user.username, bot.user.displayAvatarURL)
    .setTimestamp()
    .setFooter(bot.user.username, bot.user.displayAvatarURL)
    message.channel.send(biembed);
    }





module.exports.help = {

    name: "botinvite"

}