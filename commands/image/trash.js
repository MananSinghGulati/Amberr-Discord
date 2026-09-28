const Discord = require("discord.js");

module.exports = {
  name: "trash",
  premium: false,
  timeout: 1000 * 2,

  run: async (client, message, args) => {
    const canvacord = require("canvacord");
    const member = message.mentions.members.first() || message.member;
    const avatar = member.user.displayAvatarURL({ format: "png", dynamic: true});
    let image = await canvacord.Canvas.trash(avatar);
    let attachment = new Discord.MessageAttachment(image, "trash.png");
    message.channel.send(attachment);
  },
};
