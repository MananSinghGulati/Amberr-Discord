const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const blackjack = require ('discord-blackjack')

module.exports = {
    name : 'blackjack',
    category : 'fun',
    description : '',

    
    run : async(client, message, args) => {
      

		 let game = await blackjack(message, client, {resultEmbed: false})
        
        switch (game.result) {
            
            case "Win":
                message.channel.send(
                    new Discord.MessageEmbed()
                    .setTitle("You won!")
                    .setDescription(`You have a total of ${game.yvalue} points!`)
                )
                break;
            case "Lose":
                message.channel.send("You're a disgrace to us...")
            
        }
    }
}
