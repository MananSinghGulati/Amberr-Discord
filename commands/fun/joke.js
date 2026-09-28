const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const giveMeAJoke = require('give-me-a-joke')


module.exports = {
    name : 'joke',
    category : '',
    description : '',
	premium: false ,
	timeout: 1000 , 
    
    run : async(client, message, args) => {
      message.channel.send('This command has a glitch and is being fixed!')
// giveMeAJoke.getRandomDadJoke (function(joke) {
// 	message.channel.send(joke + '\n haha ik im very funny.')
// })

    }
}