const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
module.exports = {
    name : 'set-status',
    category : 'owner',
    description : '',
	timeout: 0.1,

    
    run : async(client, message, args) => {
      
 const query = args.join (" ")

		if (message.author.id != '414329193908797440') return message.channel.send ("You need to be an owner to run this command")

		client.user.setPresence({
			activity: {
				name: query,
				type: 0,
			}
		})

    }
}
