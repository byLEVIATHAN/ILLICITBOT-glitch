const discord = require("discord.js");
const { stripIndents } = require("common-tags");

// Import the fortnite module
const Client = require("fortnite");
const ft = new Client(process.env.FORTNITE);

module.exports.run = async(bot, message, args) => {

      // Available platforms
        const platforms = ["pc", "xb1", "psn"];
        
        // Store code
        if (args[0].toLowerCase() === "store") {
             const store = await ft.store();

            const embed = new discord.RichEmbed()
                .setColor("#9d4dbb")
                .setFooter("Fortnite Store", message.author.displayAvatarURL)
                .setTimestamp();

            store.sort((a, b) => {
                return b.vbucks - a.vbucks;
            });

            store.forEach(el => {
                embed.addField(el.name, stripIndents`**- Rarity:** ${el.rarity}
                **- Price:** ${el.vbucks} v-bucks
                **- Image:** [Press Me](${el.image})`, true)
            });

            message.channel.send(embed);
        } else {
            // Get the last word from the args array
            const lastWord = args[args.length - 1].toLowerCase();
            
            // Declare variables so we can use them later
            let platform, username; 

            // If the platforms array includes the last word we provided
            if (platforms.includes(lastWord)) {
                // Make the username untill the last word
                username = args.slice(0, args.length - 1).join(" ");
                // Make the platform the last word  
                platform = lastWord;
            } else {    
                // Make the username all words
                username = args.join(" ");
                // Platform defaults to PC
                platform = "pc";
            }
          
            
            // Search for the user 
            const search = await ft.user(username, platform);

            // If the user isn't found
            if (!search.username) {
                return message.channel.send("Couldn't find that person, try again")
                    .then(m => m.delete(5000));
            }

            // Declare stuffs for easier access
            const lifetime = search.stats.lifetime;
            const solo = search.stats.solo;
            const duo = search.stats.duo;
            const squad = search.stats.squad;

            const embed = new discord.RichEmbed()
                .setTitle(`${search.username} (${search.platform})`)
                //.setURL(search.url)
                .setColor("#9d4dbb")
                .setFooter(`Fortnite Stats`, message.author.displayAvatarURL)
                .setTimestamp()
                .addField("Solo:", stripIndents`**- Wins:** ${solo.wins}
                **- KD:** ${solo.kd}
                **- Kills:** ${solo.kills}
                **- Kills per match:** ${solo.kills_per_match}`, true)
                .addField("Duo:", stripIndents`**- Wins:** ${duo.wins}
                **- KD:** ${duo.kd}
                **- Kills:** ${duo.kills}
                **- Kills per match:** ${duo.kills_per_match}`, true)
                .addField("Squad:", stripIndents`**- Wins:** ${squad.wins}
                **- KD:** ${squad.kd}
                **- Kills:** ${squad.kills}
                **- Kills per match:** ${squad.kills_per_match}`, true)
                .addField("Lifetime:", stripIndents`**- Wins:** ${lifetime.wins}
                **- KD:** ${lifetime.kd}
                **- Kills:** ${lifetime.kills}`, false)

            message.channel.send(embed)
        }
    };

module.exports.help = {

    name: "fortnite"

}