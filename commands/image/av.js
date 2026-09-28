const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
module.exports = {
    name : 'avatar',
	aliases: ['av', 'pfp'],
    category : 'image',
    description : '',
	timeout: 0.1,


    
    run : async(client, message, args) => {
		
		     let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({dynamic: true, size: 1024})


        const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s avatar`)
        .setImage(avatar)
        .setColor("RANDOM")

        message.channel.send(embed);

    }
}
