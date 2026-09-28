const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
module.exports = {
    name : 'calc',
	aliases: ['calculator','calculate'],
    category : 'utility',
    description : '',
	premium: false  ,
	timeout: 10000 , 
    
    run : async(client, message, args) => {
      
	  const { Calculator } = require("weky");
await Calculator({
    message: message,
    embed: {
        title: 'Calculator',
        color: '#7289da',
        timestamp: true
    },
    disabledQuery: 'Calculator is disabled!',
    invalidQuery: 'The provided equation is invalid!',
    othersMessage: 'Only <@{{author}}> can use the buttons!'
});

    }
}
