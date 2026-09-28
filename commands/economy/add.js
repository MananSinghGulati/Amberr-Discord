const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
module.exports = {
    name : 'add',
    category : '',
    description : '',
	timeout:0.1,

    
    run : async(client, message, args) => {
       if (message.author.id != "414329193908797440") return;
	  const member = message.mentions.members.first() || message.member

	  client.add(member.id, parseInt(args[0]))

	  message.channel.send(`Added ${args[0]} to the user`)

    }
}
