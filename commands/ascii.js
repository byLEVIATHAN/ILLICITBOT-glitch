const discord = require("discord.js");
const figlet = require("figlet");

module.exports.run = async(bot, message, args) => {

     try {
            if (!args.join(' ')) return message.reply('Please specify text for the ascii conversion');
            figlet.text(args.join(' '), {
                font: "ANSI Shadow",
                horizontalLayout: "default",
                verticalLayout: "default"
            }, function (err, data) {
                if (err) {
                    console.log("Something Went Wrong...")
                    console.dir(err)
                    return;
                }
                message.channel.send(data, {
                    code: "ILLICITBOT"
                })
            })
        } catch (err) {
            console.error(err)
        }
    }


module.exports.help = {

    name: "ascii"

}