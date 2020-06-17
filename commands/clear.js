const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    // $clear + amount clears the amount of given messages

    
    //if(!message.member.hasPermissions("MANAGE_MESSAGES")) return message.reply("You do not have permission to perform this action.");

  
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("You do not have permission to perform this action.");


    if(!args[0]) return message.reply("Please specify the amount of messages to clear.");

    if(Number.isInteger(parseInt(args[0]))){

        
        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            if(args[0] == 0){

                message.channel.send(`I can not clear 0 messages.`).then(msg => msg.delete(3000));

            } else if (args[0] == 1){

                message.channel.send(`I have cleared 1 message.`).then(msg => msg.delete(3000));

            } else{
                message.channel.send(`I have cleared ${args[0]} messages.`).then(msg => msg.delete(3000));

            }
            
        });

    } else {
        return message.channel.send("Please insert a number.");
    }

}

module.exports.help = {

    name: "clear"

}