const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var banUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));


    // if the message content starts with "!ban"
  if (message.content.startsWith('$ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);


      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permission to complete this action.");

      if(banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can not ban this user.");


      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
         */
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          // We let the message author know we were able to ban the person
          message.reply(`Successfully banned ${user.tag}`);

          var ban = new discord.RichEmbed()
        .setDescription(":x: Ban")
        .setColor("#db2a41")
        .addField("Ban user", banUser)
        .addField("Banned by", message.author)


        var banChannel = message.guild.channels.find(`name`, "bot");
        if(!banChannel) return message.guild.send("Could not find the channel.");

        message.guild.member(banUser).ban();

        banChannel.send(ban);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to ban the member,
          // either due to missing permissions or role hierarchy
          message.reply('I was unable to ban the member');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('That user isn\'t in this guild!');
      }
    } else {
    // Otherwise, if no user was mentioned
      message.reply('You didn\'t mention the user to ban!');
    }
  }
}

module.exports.help = {

    name: "ban"

}