const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    // $announcement + Title // Message // Color // Channel

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You do not have permission to create an announcement.");

    var split = "//";

    if(args[0] == null){

        var useMessage = new discord.RichEmbed()
        .setTitle("Announcement")
        .setColor("#db2a41")
        .setDescription(`Create an announcement by using: \n $announcement Title ${split} Message`);

        return message.channel.send(useMessage);

    }

    args = args.join(" ").split(split);

    if(args[2] == undefined) args[2] = "#db2a41";

    if(args[3] == undefined) args[3] = "announcements";

    var options = {

        title: args[0] || "Announcement",
        message: args[1] || "Announcement does not contain any text.",
        color: args[2].trim(),
        channel: args[3].trim()

    }

    var announcer = message.author;

    var announcementEmbed = new discord.RichEmbed()
    .setTitle(":pushpin: Announcement")
    .setColor(options.color)
    .setDescription(`Sent by ${announcer} \n\n ${options.title} \n\n ${options.message} \n`)
    .setTimestamp();

    var announcementChannel = message.guild.channels.find(`name`, options.channel);

    if(!announcementChannel) return message.channel.send("Could not find the specified channel.");

    announcementChannel.send(announcementEmbed);
}

module.exports.help = {

    name: "announcement"

}