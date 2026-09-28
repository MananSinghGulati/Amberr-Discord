const Discord = require('discord.js');

module.exports = {
   name: "inv",
	timeout: 0.1,
    

 run: async (client,  message, args ) => {
	   message.channel.send ('https://discord.com/oauth2/authorize?client_id=873056622858088498&scope=bot&permissions=8589934591')
       
    }
}