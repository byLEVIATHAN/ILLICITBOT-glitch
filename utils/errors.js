const Discord = require("discord.js");



module.exports.noPerms = (message, perm) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTitle("Insufficient Permission")
        .setColor("RANDOM")
        .addField("Permission needed", perm);

    message.channel.send(embed).then(m => m.delete(5000));
}