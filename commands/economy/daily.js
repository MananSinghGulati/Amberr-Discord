const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const premiumSchema = require('../../models/premium');


module.exports = {
    name : 'daily',
    category : 'economy',
    description : '',
	// timeout: 1000*60*60*60*24, 
	timeout: 1000*60*60*24,
    
    run : async(client, message, args) => {
      
		  if (await premiumSchema.findOne( { User: message.author.id })) {
			   const premiumcoins = 3500;
			   message.reply (`You have redeemed your daily ${premiumcoins}`);

			   client.add(message.author.id, premiumcoins)
			   return;
		  }
const coins = 1750;
			   message.reply (`You have redeemed your daily ${coins}`);

			   client.add(message.author.id, coins)
				return;
    }
}