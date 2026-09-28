const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const premiumSchema = require('../../models/premium');


module.exports = {
    name : 'weekly',
    category : 'economy',
    description : '',
	// timeout: 1000*60*60*60*24, 
	timeout: 1000*60*60*24,
    
    run : async(client, message, args) => {
      
		  if (await premiumSchema.findOne( { User: message.author.id })) {
			   const premiumcoins = 10000;
			   message.reply (`You have redeemed your weekly ${premiumcoins}`);

			   client.add(message.author.id, premiumcoins)
			   return;
		  }
const coins = 5000;
			   message.reply (`You have redeemed your weekly ${coins}`);

			   client.add(message.author.id, coins)
				return;
    }
}