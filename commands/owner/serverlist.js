const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
module.exports = {
    name : 'slist',
    category : 'owner',
    description : '',

    
    run : async(client, message, args) => {
      

			if (!message.author.id === '414329193908797440') {
				message.channel.send ('You need to be a dev to use this command!')
			}

		client.guilds.cache.forEach (( guild)  => {
			message.channel.send (`${guild.name} with ${guild.memberCount} members`)
		})

    }
}
