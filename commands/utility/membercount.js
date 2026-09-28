const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
module.exports = {
    name : 'membercount',
    category : 'utility',
    description : 'displays membercount of a server',
	timeout: 0.1,

    
    run : async(client, message, args) => {
      
		const guild = message;
		const embed = new Discord.MessageEmbed ()
		.setAuthor(`Member count of ${message.guild}` , message.guild.iconURL({ dynamic:true }))
		.setColor(
			"Random"
		)

		.setTitle("Members")

		.setDescription(`Total: ${message.guild.members.cache.size}\n Members: ${message.guild.members.cache.filter(member => !member.user.bot).size}\nBots: ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
		  .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp()
       
	   message.channel.send(embed)
    }
}
