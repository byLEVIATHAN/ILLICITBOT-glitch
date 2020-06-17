const discord  = require("discord.js");
const ms = require("ms");

module.exports.run = async(bot, message, args) => {

   // $tempban User Time Reason

   if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have permission to perform this action.");

   var user = message.guild.member(message.mentions.users.first());

   if(!user) return message.channel.send("Please specify a user, time and reason. Or I could not find this user.")

   if(user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Could not tempban this user.");

   var tempBanTime = args[1];

   var reason = args.join(" ").slice(22);

   if(!reason) return message.channel.send("Please specify a reason.");

   if(ms(tempBanTime)){

    await message.guild.member(user).ban(reason);
    
    message.channel.send(`${user} has been tempbanned because of ${reason}`);

    setTimeout(function(){

        message.guild.unban(user.id);

        message.channel.send(`${user} has been unbanned.`);

    }, ms(tempBanTime));



    var tempBanEmbed = new discord.RichEmbed()
        .setDescription("TempBan")
        .setColor("#db2a41")
        .addField("User", user)
        .addField("Tempbanned by", message.author)
        .addField("Time", tempBanTime)
       // .addField("Reason", reason);

        var tempBanChannel = message.guild.channels.find(`name`, "bot");
        if(!tempBanChannel) return message.guild.send("Could not find the channel.");

        tempBanChannel.send(tempBanEmbed);


   }else{
       return message.channel.send("Please specify the amount of time.");
   }

}

module.exports.help = {

    name: "tempban"

}