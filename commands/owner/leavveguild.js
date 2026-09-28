const Discord = require('discord.js')

module.exports = {
	name:"leveguild",
	timeout: 0.1,

	run: async(client, message, args) => {
		const guildid = args[0]
		console.log(client.constructor.name)
		client.guilds.cache.get(guildid).leave()
		
	}
}