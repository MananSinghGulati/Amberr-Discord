// const { MessageEmbed } = require('discord.js');
// const Discord = require('discord.js');
// const Afk = require('../../models/afk-schema')
// module.exports = {
//     name : 'afk',
//     category : '',
//     description : '',
// 	premium:false  ,
// 	timeout:0.1 , 
    
//     run : async(client, message, args) => {
      
// 		        let reason = args.join(" ");
//         if(!reason) reason = "The user is on AFK"; 
//         let afkProfile = await Afk.findOne({ userID: message.author.id}); 
//         if (!afkProfile) {
//             afkProfile = await new Afk({
//                 userID: message.author.id, 
//                 reason: reason, 
//             }); 
//             await afkProfile.save(); 
//             message.channel.send('You are now in AFK'); 
//         } else return message.channel.send('You are already in Afk bruh'); 

//     }
// }
