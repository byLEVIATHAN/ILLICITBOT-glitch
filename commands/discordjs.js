const discord = require("discord.js");

const sources = ['akairo', 'akairo-master', 'commando'];
const fetch = require('node-superfetch');

module.exports.run = async(bot, message, args) => {

    module.exports.run = async (client, msg, args) => {
    let query = args.join(' ');
    if(!query) return msg.channel.send('Please specify something to search');
    if(query.includes('--')) query = query.split('--')[0];
    let type = args.join(' ').split('--')[1] || 'stable';
    if(!sources.includes(type)) type = `https://raw.githubusercontent.com/discordjs/discord.js/docs/${type}.json`;
    fetch.get(`https://djsdocs.sorta.moe/v2/embed?src=${type}&q=${query}`)
        .then((res) => {
            if(!res.body) return msg.channel.send('Could not fetch any search results');
            return msg.channel.send({ embed: res.body });
        }).catch(() => msg.channel.send('Could not fetch any search results. Invalid source'));
}


}

module.exports.help = {

    name: "discordjs"

}