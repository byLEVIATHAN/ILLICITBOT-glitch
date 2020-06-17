const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
if (args.join(" ") == "") {
        message.reply("you need to mention a user for this command! eg.: $avatar @USER");
        return;
    } else {
        let user = message.mentions.users.first(); // Mentioned user
        let image = user.displayAvatarURL; // Get image URL
        let embed = new discord.RichEmbed()
            .setAuthor(`${user.username}#${user.discriminator}`) // Set author
            .setColor("#RANDOM") // Set color (If you don't have ideas or preference, use RANDOM for random colors)
            .setImage(image) // Set image in embed
        message.channel.send(embed); // Send embed
    }
};
module.exports.help = {

    name: "avatar"

}