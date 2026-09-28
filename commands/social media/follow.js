// const { MessageEmbed } = require('discord.js');
// const Discord = require('discord.js');

// module.exports = {
//     name : 'follow',
//     category : '',
//     description : '',
// 	premium: false ,
// 	timeout:1000 , 
    
//     run : async(client, message, args) => {
// 		const mentionRegex = /^<@!?(\d{17,19})>$/;

// 		let data = await Schema.findOne({ User: member.id });

// 		const member = message.mentions.users.first();
      
// 		if (!args[0])return message.channel.send("You need to mention someone whom you want to follow.");

// 		if (args[0] !== message.mentions.members.first()) return message.channel.send("That is not a user!");
	
// 		let member = message.mentions.members.first();
//     	let embed = new MessageEmbed()
//       .setTitle("Error! You already follow this user! ")

//         if (data.Followers) return message.channel.send(embed)


// 		await Schema.findOneAndUpdate({User: message.author.id}, { Followed: args[0]})



// 		message.reply(`Successfully updated your bio`)


//     }
// }
