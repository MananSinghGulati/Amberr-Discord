const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name : 'price',
    category : 'stocks',
    description : 'checks the current price of stocks',
	premium: false ,
	timeout: 0.1 , 
    
    run : async(client, message, args) => {
      
	const price = setInterval(function(){   
    console.log(Math.floor((Math.random()*100)+1)); 

 }, 1000);

	

		const embed = new MessageEmbed ()
		.setTitle("Current Stock Price")
		.setColor("RANDOM")
		.setDescription(`The current stock price is **${price}**`)
		.setTimestamp()

		message.channel.send(embed)
		

    }	
}
