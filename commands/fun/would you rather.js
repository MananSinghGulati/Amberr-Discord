const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const questions = require('../../messages/wyr/would-you-rather.json');

module.exports = {
    name:'wouldyourather',
	aliases: ['wyr'],
	
    category : 'fun',
    description : '',
	timeout: 0.1,
	

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
          let messagetext =  questions[Math.floor(Math.random() * questions.length)]
let question = messagetext.split("Would you rather ")[1]
let Option1 = question.split(" or ")[0]
let Option2 = question.split(" or ")[1]

    reply = {
        embed: {
            color: 3447003,
            "title": "Lets Play Would You Rather! \n",
            "description": `Would you rather \n 🅰️ ${Option1} \n or \n :regional_indicator_b: ${Option2}`,
           
        },
    }
    wyrmessage = await message.channel.send(reply);
    wyrmessage.react('🅰️')
    wyrmessage.react('🇧')

    }
}
	