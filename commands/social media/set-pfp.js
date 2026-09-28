/* eslint-disable no-unused-vars */
const { Client, Message, MessageEmbed } = require("discord.js");
const Discord = require('discord.js')


const Schema = require("../../models/bio");
module.exports = {
  name: "set-pfp",
  aliases: ["s-pfp","setpfp"],
  timeout: 1000,

  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {

	let member = message.mentions.members.first();
    let embed = new MessageEmbed()
      .setTitle("Error! provide an image you want")
      .setDescription(`Usage: =setpfp link`);
        if (!args)
      	return message.reply(embed);
await Schema.findOneAndUpdate({User: message.author.id}, { Pfp: args[0]})
    message.reply(`Successfully updated your bio`);
  },
};