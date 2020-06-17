const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var i = 0;
  var pen = "8";
  var length = Math.floor(Math.random() * 25);
  if (message.author.id === "254814619825078273") {
    message.reply(
      "This is your penis " +
        "8=================================================D"
    );
  } else {
    while (i != length) {
      pen = pen + "=";
      i = i + 1;
    }
    pen = pen + "D";
    message.reply("This is your penis " + pen);
  }
};

module.exports.help = {
  name: "pptest"
};
