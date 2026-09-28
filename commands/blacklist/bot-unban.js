	const blacklist = require ('../../models/blacklist')
	const { Message } = require ('discord.js')

	module.exports = {
		name : 'unblacklist',
		category : 'blacklist',
		description : '',
		timeout: 0.1,

		
		run : async(client, message, args) => {
		
			if (message.author.id != '414329193908797440') return message.channel.send ('You  need to be an owner you idiot')

			const User = message.guild.members.cache.get(args[0])

			if (!User) return message.channel.send ("User is not valid.")

			blacklist.findOne({ id: User.user.id }, async(err, data) => {
				if (err) throw err

				if (data) {
			
			await blacklist.findOneAndDelete({ id: User.user.id })
			.catch(err => console.log(err))
			message.channel.send (`Removed blacklist from **${User.displayName}**`)
				} else {
					
					message.channel.send (`**${User.displayName} is not blacklisted!**`)

				}

			})

		}
	}
