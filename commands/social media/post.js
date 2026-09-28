const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const Schema = require(`../../models/bio`);

module.exports = {
    name : 'post',
    category : '',
    description : '',
	premium: true,
	timeout: 1000, 
    
    run : async(client, message, args) => {
      
		
	let member = message.mentions.members.first();
    let embed = new MessageEmbed()
      .setTitle("Error! you can only post images as posts")
      .setDescription(`Usage: =post image_link`);
        if (!args)
      	return message.reply(embed);
await Schema.findOneAndUpdate({User: message.author.id}, { Post: args[0]})
    message.reply(`Successfully posted the image on your profile`);

    }
}
