const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
module.exports = {
    name : 'ftype',
    category : 'fun',
	aliases: 'fast-type',
    description : 'type as fast ass you can',
	timeout: 0.1,
	

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
			const { FastType } = require('weky');
	await FastType({
    message: message,
    embed: {
        title: 'FastType | Weky Development',
        description: 'You have **{{time}}** to type the below sentence.',
        color: '#7289da',
        timestamp: true
    },
    sentence: 'This is a sentence!',
    winMessage: 'GG, you have a wpm of **{{wpm}}** and You made it in **{{time}}**.',
    loseMessage: 'Better luck next time!',
    cancelMessage: 'You ended the game!',
    time: 60000,
    buttonText: 'Cancel',
    othersMessage: 'Only <@{{author}}> can use the buttons!'
});
    }
}
