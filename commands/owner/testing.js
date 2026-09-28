
const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')

const premiumSchema = require('../../models/premium');
module.exports = {
    name : 'testing',
    category : '',
    description : '',
	timeout:2000,

	
    
    run : async(client, message, args) => {
     const targetUser = message.mentions.users.first()
	 
    const member = guild.members.cache.get(targetUser.id)
	member.roles.remove()
    }
}

