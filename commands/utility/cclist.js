const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const schema = require('../../models/customCommands');

module.exports = {
    name : 'cclist',
    category : '',
    description : '',
	premium: false ,
	timeout: 1000*10 , 
    
    run : async(client, message, args) => {
      
		const data = await schema.findOne({ Guild:message.guild.id });
		if(!!data === false) return message.channel.send("No custom commands in this server.");

		message.channel.send (
			new MessageEmbed()
			.setColor("BLUE")
			.setDescription(
				data.map((cmd, i) => 
					`${i + 1}: ${cmd.Command}`				
				).join('\n')
			)
		)

    }
}
