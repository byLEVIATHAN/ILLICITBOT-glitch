const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

     let guilds = bot.guilds.map(g => `${g.name.replace(/[^\x00-\x7F]/g, "")}${" ".repeat(Math.floor(Math.max(...bot.guilds.map(g => g.name.length)))+ - g.name.replace(/[^\x00-\x7F]/g, "").length)} | ${g.id} | ${g.memberCount}`).join('\n')

     
     
     const embed = new discord.RichEmbed()
      .setColor("RED")
      .setAuthor(` Guild Name | Guild ID | Guild Membercount `)
      .setDescription(`\`\`\`js\n${guilds}\`\`\``)
      .addField('[**__Guild Count__**]', `\`\`\`js\n${bot.guilds.size}\`\`\``, true)
      .addField('[**__User Count__**] (excludes bots)', `\`\`\`js\n${bot.users.size}\`\`\``, true)
        return message.channel.send(embed);
     


}

module.exports.help = {

    name: "guilds"

}