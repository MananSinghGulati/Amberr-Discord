/* eslint-disable no-unused-vars */
const { Client, Message, MessageEmbed } = require("discord.js");
const Schema = require("../../models/bio");
module.exports = {
  name: "set-bio",
  aliases: ["sb"],
  timeout: 1000,

  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    let embed = new MessageEmbed()
      .setTitle("Error! Describe yourself more you idiot")
      .setDescription(`Usage: setbio <bio>`);
        if (!args.join(" "))
      	return message.reply(embed);
    Schema.findOne({ User: message.author.id }, async (err, data) => {
      if (data) data.delete();
      new Schema({
        User: message.author.id,
        Bio: args.join(" "),
      }).save();
    });
    message.reply(`Successfully updated your bio`);
  },
};