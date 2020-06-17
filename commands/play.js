const ytdl = require('ytdl-core');
 
module.exports.run = async (bot, message, args, opts) => {
 
    if (!message.member.voiceChannel) return message.channel.send("Please connect to a voice channel.");
 
    // if (message.guild.me.voiceChannel) return message.channel.send("Sorry de bot is al geconecteerd met een spraak kanaal");
 
    if (!args[0]) return message.channel.send("Please insert a YouTube URL.");
 
    var validate = await ytdl.validateURL(args[0]);
 
    if (!validate) return message.channel.send("Insert a correct YouTube URL.");
 
    var info = await ytdl.getInfo(args[0]);
 
 
    // Verkrijgen van de data als die er al is.
    var data = opts.active.get(message.guild.id) || {};
 
    // Maak een connectie met het kanaal als die er nog niet is.
    if (!data.connection) data.connection = await message.member.voiceChannel.join();
    // Voeg een queue aan de data.
    if (!data.queue) data.queue = [];
    // Geef het ID mee.
    data.guildID = message.guild.id;
 
    // Voeg de liedjes toe aan de lijst met volgende gegevens.
    // Titel, aanvrager, link, welk kanaal aangevraagd.
    data.queue.push({
        songTitle: info.title,
        requester: message.author.tag,
        url: args[0],
        announceChannel: message.channel.id
    });
 
    // Als nog geen speelt dan roep play op anders gaan we enkel een bericht geven.
    if (!data.dispatcher) {
        Play(bot, opts, data);
    } else {
 
        message.channel.send(`Added to queue: **${info.title}** | Requested by: **${message.author.tag}**`);
 
    }
 
    // De data optslaan.
    opts.active.set(message.guild.id, data);
 
}
 
/**
 *  Om het liedje af te spelen roepen we play op.
 *
 * @param {*} bot Gegevens van de bot.
 * @param {*} opts Opties die we meegeven. (Al de liedjes in de queue).
 * @param {*} data De data die we hebben opgevraagd.
 */
async function Play(bot, opts, data) {
 
    // Tekst geven welk liedje dat aan het spelen is.
    bot.channels.get(data.queue[0].announceChannel).send(`Now Playing: :notes: **${data.queue[0].songTitle}** - Requested by: **${data.queue[0].requester}**`);
 
    // Opties meegeven. Bitrate is voor de duidelijkheid van het liedje.
    var options = { seek: 2, volume: 1, bitrate: 12800 };
 
    // Speel de stream af met de opties.
    data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, { filter: "audioonly" , quality: 'highestaudio', highWaterMark: 1<<25 }), {highWaterMark: 1});
    // Sla het ID mee op. (Hebben we later nodig voor op te vragen welke liedjes er nog zijn in de queue.)
    data.dispatcher.guildID = data.guildID;
 
    // Kijk na als het einde bereikt is en roep dan de functie Finish op.
    data.dispatcher.once('end', function () {
 
        Finish(bot, opts, this);
 
    });
 
}
 
/**
 * Als het liedje is gedaan dan gaan we eerst nakijken als er nog liedjes zijn en terug optarten
 * als geen liedje meer in lijst, dan stop alles en gooi bot uit kanaal.
 *
 * @param {*} bot Gegevens van de bot zelf.
 * @param {*} opts Opties die we meegegeven. (Al de data).
 * @param {*} dispatcher Oproep data mee geven.
 */
function Finish(bot, opts, dispatcher) {
 
    // Data verkrijgen van wat actief is.
    var fetchedData = opts.active.get(dispatcher.guildID);
 
    // Wis het eerste liedje van de lijst.
    fetchedData.queue.shift();
 
    // Als er nog liedjes zijn roep dan play op.
    if (fetchedData.queue.length > 0) {
 
        opts.active.set(dispatcher.guildID, fetchedData);
 
        Play(bot, opts, fetchedData);
 
    } else { // Geen liedjes meer delete dan alles en haal bot uit kanaal.
 
        opts.active.delete(dispatcher.guildID);
 
        var voiceChannel = bot.guilds.get(dispatcher.guildID).me.voiceChannel;
 
        if (voiceChannel) voiceChannel.leave();
 
    }
 
}
 
module.exports.help = {
    name: "play"
}