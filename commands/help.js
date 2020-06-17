const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

//     try{


//         var text = "**IllicitBot** \n\n **__Administrative Commands__**\n **$announcement** - Create an announcement by using $announcement [Title]//[Message] **Use without Brackets** \n **$ban** - Ban a certain user. \n **$kick** - Kick a certain user. \n **$tempban** - Tempban a user. **Specify a userand time (in ms). ** \n **$tempmute** - Tempmute a user. **Specify a user and time(in ms).** \n **$warn** - Warn a user. **Specify a user and a reason.** \n\n  **__Commands__** \n **$botinfo** - Show IllicitBot's information. \n **$serverinfo** - Show serverinfo. \n **$clear** - Clear an amount of messages. \n **$ping** - Check bot latency. \n **$help** - I will dm you a list of my commands. \n **$invite** - Reply with an invite link to the server. \n\n **__MUSIC COMMANDS__** \n **$play** - Plays a song with the given URL. \n **$leave** - Disconnect the bot from the voice channel it is in. \n **$skip** - Skips the currently playing song. \n **$pause** - Pause the currently playing song. \n **$resume** - Resume the currently paused song. \n **$queue** - View the current queue. \n **$volume** - Change the bot's volume. \n **$ytsearch** - Search for a song on YouTube with a given argument. *For example: The Hills. This will give you 10 videos with The Hills in their title*";

//         message.author.send(text);

//         message.channel.send("I have sent you a private message with all of my commands.");

//     } catch(error){

//         message.channel.send("A problem has occured.");

//     }

    

// }
  
  
  
  let helpembed = new discord.RichEmbed()
    .addField(":exclamation: ***USE ALL COMMANDS WITH LOWERCASE LETTERS***")
    .addField(" ℹ [HELP MENU]", "--------------------------------------")
    .setColor("RANDOM")
    .addField("Help", "Shows list of commands or can show advice on using command [ex: $<command> help]")
    .addField("Ping", "Test bot connection")
    .addField("Serverinfo", "Gives information on current server")
    .addField("Userinfo", "Gives information on user of choice")
    .addField("Botinfo", "Gives some basic information on ILLICITBOT")
    .addField("Info", "Information on bot and creator")
    .addField("Report", "Report a user for conflict or breaking rules. [ex: $report <user> <reason>]")
    .addField("Roleinfo", "Gives information on role of choice [ex: $roleinfo <role>]")
    .addField("Serverroles", "Shows list of all the roles in current server")
    .addField("Invite", "Get invite links")
    .addField("Inviteleaderboard", "Shows the leaderboard with the people with the most invites")
    //.addField("Serveremojis", "Shows all of the custom added emojis to the server")
    .addField("Donate", "Get a PayPal Pool link to support the development of our bot and community")
    .addField("Membercount", "The amount of members in the servers")
    .addField("Weather", "Shows the weather in a certain city around the world.")
    message.channel.send(helpembed);

    let help2embed = new discord.RichEmbed()
    .addField(" 🎲 [FUN COMMANDS]", "--------------------------------------")
    .setColor("RANDOM")
    .addField("8ball", "Shake the 8ball to answer your deepest questions [ex: !8ball <question>]")
    .addField("Coinflip", "Flip a coin")
    //.addField("Coins", "Check your ILLCITCOIN ammount")
    //.addField("Pay", "Transfer your ILLICITCOINS to a friend")
    .addField("Ship", "Ship your fav two people [ex: $ship <@user> <@user>]")
    .addField("Gay", "Gay meter, see how gay someone is[ex: $gay <@user>]")
    .addField("Meme", "Posts random meme from r/meme")
    .addField("Dankmeme", "Posts random dankmemes from r/dankmeme")
    .addField("PPtest", "Test how big your pp is")
    .addField("Dice", "Rolls dice gives you random number")
    .addField("Slotmachine", "Test your luck on a slotmachine")
    //.addField("Slots", "Test your luck and spin some slots")
    .addField("Avatar", "Get a closer look at someones avatar [ex: $avatar <@user> ]")
    //.addField("Ascii", "Convert text into ascii [ex: !ascii <random> ]")
    //.addField("Textflip", "Flip word(s) of choice[ex: !textflip <random> ]")
    //.addField("Math", "Make the bot do the math for you [ex: !math 1 + 1]")
    .addField("Roast", "Roast a doodooheadass of choice [ex: $roast <@user>]")
    .addField("Shitzu", "Special command for Shitzu")
    .addField("Sukakok", "See for yourself")
    //.addField("Embed", "Make a small quick embed [ex: !embed <blah blah blah>]")
    //.addField("Pat", "Pat pat [ex: !pat <@user>]")
    //.addField("Hug", "Give someone a hug [ex: !hug <@user>]")
    //.addField("Kiss", "Give someone a smooch [ex: !kiss <@user>]")
    //.addField("Marry", "Marry a special someone [ex: !marry <@user>]")
    //.addField("Dropkick", "Dropkick your enemy [ex: !dropkick <@user>]")
    //.addField("Neko [NSFW]", "Random lewd nekos")
      .addField("Dank", "Get a rating on the dankscale")
      .addField("Fortnite", "Get the stats of a specified Fortnite player")
      .addField("Gnome", "You've Been Gnomed")
      .addField("R6", "Get the stats of a specified Rainbow Six Siege player")
      .addField("Wiki", "Look something up on Wikipedia [ex: $wiki <search request>]")
      .addField("Yomomma", "A random yomomma joke")
    message.channel.send(help2embed);
  
  let help3embed = new discord.RichEmbed()
    .addField(" :notes: [MUSIC COMMANDS]", "--------------------------------------")
    .setColor("RANDOM")
    .addField("Play", "Plays a song with the given URL")
    .addField("Leave", "Disconnect the bot from the voice channel it is in")
    .addField("Skip", "Skips the currently playing song")
    .addField("Pause", "Pause the currently playing song")
    .addField("Resume", "Resume the currently paused song")
    .addField("NP", "Show the song that is currently being played")
    .addField("Queue", "View the current queue")
    .addField("Volume", "Change the bot's volume")
    .addField("YTSearch", "Search for a song on YouTube with a given argument. *For example: The Hills. This will give you 10 videos with The Hills in their title*")
    message.channel.send(help3embed);
  
  let help4embed = new discord.RichEmbed()
    .addField(" :underage: [NSFW COMMANDS]", "--------------------------------------")
    .setColor("RANDOM")
    .addField("4k", "Display a random 4k NSFW picture")
    .addField("Anal", "Display a random anal picture")
    .addField("Ass", "Display a random picture of an ass")
    .addField("Pgif", "Display a random porngif")
    .addField("Hentai", "Display a random hentai picture")
    .addField("Holo", "Display a random animated picture (**NOT HENTAI**)")
    .addField("Pussy", "Display a random picture of a pussy")
    .addField("Thigh", "Display a random thigh picture")
    .addField("Pornhub [NSFW]", "Look something up on Pornhub you lil perv [ex: $pornhub <search request>]")
    message.channel.send(help4embed);

//     let help5embed = new discord.RichEmbed()
//     .addField(" 🔍 [COMMANDS TO SEARCH THE WEB]", "--------------------------------------")
//     .setColor("RANDOM")
//     .addField("DDG", "Search something up on DuckDuckGo [ex: !ddg <search request>]")
//     .addField("Google", "Look something up on google. [ex: !google <search request>]")
//     .addField("Pornhub [NSFW]", "Look something up on Pornhub you lil perv [ex: !pornhub <search request>]")
//     .addField("Wiki", "Look something up on wiki [ex. !wiki <search request>] ")
//     .addField("Imgtfy", "Show these plebs how search engines work [ex: !imgtfy <search query>")
//     .addField("Weather", "Look something up on urban [ex. !weather <city>] ")
//     message.channel.send(help5embed);

    if(message.member.hasPermission("MANAGE_MESSAGES")){
    let modembed = new discord.RichEmbed()
    .addField(" 👮 ILLICITBOT Moderator Help Menu", "--------------------------------------")
    .setColor("#db2a41")
    .addField("Announcement", "Create an announcement by using $announcement [Title]//[Message] Use without Brackets")
    .addField("Ban", "Ban user of choice. [ex: $Ban <user>]")
    .addField("Clear", "Clear an amount of messages.")
    .addField("Kick", "Kick user of choice [ex: $Kick <user>]")
    //.addField("Unban", "Unban specified user")
    //.addField("Nick", "Change nickname of server member [ex: !nick <new nickname> <@user>")
    //.addField("Removerole", "Remove role from user [ex: !removerole <user> <role>]")
    //.addField("Addrole", "Give user role [ex: !addrole <user> <role>]")
    //.addField("Prefix", "Change ILLICITBOT's prefix [ex: !prefix <prefix>]")
    .addField("Warnlevel", "Check the amount of times a user has been warned [ex: $warnlevel <user>]")
    .addField("Tempban", "Tempban a user. **Specify a user and time (in ms)**.")
    .addField("Tempmute", "Mute user temporarily [ex: $tempmute <user> <1h> <1m> <1s>]")
    //.addField("Poll", "Create a quick poll [ex: !poll <question>")
    .addField("Warn", "Warn misbehaving user [ex: $warn <user> <reason>]")
      
    
try{
    await message.author.send(modembed);
    message.react(" ")
 }catch(e){
        message.reply("Your DMs are locked. Please go to 'Privacy settings' and allow direct messages from server members to see list of mod commands");
    }
}

}

module.exports.help = {

    name: "help"

}