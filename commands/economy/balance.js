const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
module.exports = {
    name : 'bal',
    category : 'eco',
	timeout: 10000,
	
    description : 'check balance',

    
    run : async(client, message, args) => {
      
	  const member = message.mentions.members.first() || message.member

	  const bal = await client.bal(member.id);

	  const embed = new MessageEmbed()
	  .setTitle(`${member.user.tag}'s balance`)
	.addField(`bal:`, bal)

message.channel.send(embed)

	

    }
}
