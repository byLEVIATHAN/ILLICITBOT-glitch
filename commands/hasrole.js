const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

     if(message.content.startsWith("$hasrole")){
    let roleName = message.content.split(" ").slice(1).join(" ");

    //Filtering the guild members only keeping those with the role
    //Then mapping the filtered array to their usernames
    let membersWithRole = message.guild.members.filter(member => { 
        return member.roles.find("name", roleName);
    }).map(member => {
        return member.user.username;
    })
    
  

    const embed = new discord.RichEmbed({
        "title": `Users with the ${roleName} role`,
        "description": membersWithRole.join("\n"),
        "color": 0xFFFF
    })
    
     return message.channel.send({embed});
    
    };

    //return message.channel.send({embed});
}

module.exports.help = {

    name: "hasrole"

}