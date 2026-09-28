const premiumSchema = require('../../models/premium')
const { Client, Message, MessageEmbed } = require ('discord.js')

module.exports = {
	name: 'add-premium',
timeout:0.1,
	run: async (client, message, args) => {
		if (message.author.id !== '414329193908797440') return;

		const member = message.mentions.members.first () || message.guild.members.cache.get(args[0])

		if (!member) return message.reply('Please specify a valid member!')

		premiumSchema.findOne({
			User: member.id
		}, async (err, data) => {
			if(data) return message.reply ('This user already has premium!')

			new premiumSchema({
					User: member.id
			}).save()
				return message.reply (`Added premium to the user!`)
		})
	}
}