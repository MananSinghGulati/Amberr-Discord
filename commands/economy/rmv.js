const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
module.exports = {
    name : 'rmv',
    category : '',
    description : '',
timeout:0.1,

    
    run : async(client, message, args) => {
        if (message.author.id != "414329193908797440") return;
	  const member = message.mentions.members.first() || message.member

	  client.rmv(member.id, parseInt(args[0]))

	  message.channel.send(`Removed ${args[0]} from the user`)

    }
}
