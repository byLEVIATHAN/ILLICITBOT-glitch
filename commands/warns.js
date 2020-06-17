const discord = require("discord.js");
const fs = require("fs");

const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async(bot, message, args) => {

    // $warn @user + reason
    

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not meet the requirements to perform this action.");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!user) return message.channel.send("Could not find this user.");

    if(user.hasPermission("ADMINISTRATOR")) return message.channel.send("Could not warn this user.");

    var reason = args.join(" ").slice(22);

    if(!reason) return message.channel.send("Please give a reason for this warning.");

    if(!warns[user.id]) warns[user.id] = {
        warns: 0
    };

    warns[user.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) =>{
      if(err)  console.log(err)
    });

    var warnEmbed = new discord.RichEmbed()
        .setDescription(":exclamation: Warn")
        .setColor("#db2a41")
        .addField("Warn user", user)
        .addField("Warned by", message.author)
        .addField("Amount of warnings", warns[user.id].warns)
        .addField("Reason", reason);

        var warnChannel = message.guild.channels.find(`name`, "bot");
        if(!warnChannel) return message.guild.send("Could not find the channel.");

        warnChannel.send(warnEmbed);

        if(warns[user.id].warns == 3){

    var warnmessage = new discord.RichEmbed()
        .setDescription(":bangbang: ATTENTION " + user)
        .setColor("#db2a41")
        .addField("Message", "You are 1 warning away from getting banned!");

        message.channel.send(warnmessage);

        
        }else if(warns[user.id].warns == 4){

            message.guild.member(user).ban(reason);
            message.channel.send(`:x: ${user} has been banned.`);
            
        }

}

module.exports.help = {

    name: "warn"

}