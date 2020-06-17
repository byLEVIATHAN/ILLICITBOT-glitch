const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));


    // if the message content starts with "!kick"
  if (message.content.startsWith('$kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);



      if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You do not have permission to do this.");

      if(kickUser.hasPermission("KICK_MEMBERS")) return message.channel.send("Could not kick this user.");



      // If the member is in the guild
      if (member) {
        /**
         * kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what kick options there are over at
         * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=kick
         */
        member.kick({
          reason: 'They were bad!',
        }).then(() => {
          // We let the message author know we were able to kick the person
          message.reply(`Successfully kicked ${user.tag}`);

          var kick = new discord.RichEmbed()
        .setDescription("Kick")
        .setColor("#db2a41")
        .addField("Kick user", kickUser)
        .addField("Kicked by", message.author)


        var kickChannel = message.guild.channels.find(`name`, "bot");
        if(!kickChannel) return message.guild.send("Could not find the channel.");

        message.guild.member(kickUser).kick();

        kickChannel.send(kick);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          message.reply('I was unable to kick the member');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('That user isn\'t in this guild!');
      }
    } else {
    // Otherwise, if no user was mentioned
      message.reply('You didn\'t mention the user to kick!');
    }
  }
}

module.exports.help = {

    name: "kick"

}