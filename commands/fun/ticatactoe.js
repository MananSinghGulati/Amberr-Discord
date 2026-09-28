const { MessageButton } = require('discord-buttons')
const { MessageEmbed } = require('discord.js')
const TicTacToe = require('discord-tictactoe');
const Discord = require('discord.js')
module.exports = {
    name : 'tictactoe',
    category : 'fun',
    description : '',
	timeout: 0.1,


    
    run : async(client, message, args) => {
      
	const game = new TicTacToe({ language: 'en' })
	    game.handleMessage(message);
    }
}
