const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
module.exports = {
    name : 'cwords',
	aliases : 'chaoswords',
    category : 'fun',
    description : '',
	timeout: 0.1,
	

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
		
	 const { ChaosWords } = require("weky")
 await ChaosWords({
    message: message,
    embed: {
        title: 'ChaosWords | Weky Development',
        description: 'You have **{{time}}** to find the hidden words in the below sentence.',
        color: '#7289da',
        field1: 'Sentence:',
        field2: 'Words Found/Remaining Words:',
        field3: 'Words found:',
        field4: 'Words:',
        timestamp: true
    },
    winMessage: 'GG, You won! You made it in **{{time}}**.',
    loseMessage: 'Better luck next time!',
    wrongWordMessage: 'Wrong Guess! You have **{{remaining_tries}}** tries left.',
    correctWordMessage: 'GG, **{{word}}** was correct! You have to find **{{remaining}}** more word(s).',
    time: 60000,
    words: ['hello', 'these', 'are', 'words'],
    charGenerated: 17,
    maxTries: 10,
    buttonText: 'Cancel',
    othersMessage: 'Only <@{{author}}> can use the buttons!'
});

    }
}
