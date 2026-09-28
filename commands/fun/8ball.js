const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
module.exports = {
    name : '8ball',
    category : 'fun',
    description : '8ball command',
	timeout: 0.1,

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
	
		function doMagic8BallVoodoo() {
    let rand = ['Yes', 'No', 'Why are you even trying?', 'What do you think? NO', 'Maybe', 'Never', 'Yep'];

    return rand[Math.floor(Math.random()*rand.length)];
}
"use strict";

message.channel.send( doMagic8BallVoodoo());


    }
}

