const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    let roletocheck = args.join(" ")
    let role = bot.guilds.get(message.guild.id).roles.find('name', roletocheck);
    if (!role) return message.channel.send("Role wasnt found in the server.")
    //const serialized = role.permissions.serialize();
    //const perms = Object.keys(permissions).filter(perm => serialized[perm]);
      const embed = new discord.RichEmbed()
      .setColor(0x00A2E8)
      .addField('Role name', `${role.name}`, true)
      .addField('Role ID', `${role.id}`, true)
      .addField('Created At', role.createdAt.toDateString())
      .addField("Mentionable: ", role.mentionable ? 'Yes' : 'No')
      //.addField('Permissions' , perms.map(perm => permissions[perm]).join(', ') || 'None')
      message.channel.send({embed}) 


}

module.exports.help = {

    name: "roleinfo"

}