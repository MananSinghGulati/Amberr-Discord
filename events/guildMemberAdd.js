// const db = require("quick.db") //using quick.db package
// const client = require('../index.js')
// const Discord = require('discord.js')
// client.on("guildMemberAdd", (member) => { //usage of welcome event
//   let chx = db.get(`welchannel_${member.guild.id}`); //defining var
  
//   if(chx === null) { //check if var have value or not
//     return;
//   }

 
//     let base = "https://luminabot.xyz/api/image/welcomecard2?"
//     let image = base + `avatar=${user.user.displayAvatarURL({ dynamic: false, format: 'png' })}&username=${user.user.username}&membercount=${user.guild.memberCount}&guildname=${user.guild.name}`
    
//     let att = new MessageAttachment(image, 'welcome.png')
  
//   client.channels.cache.get(chx).send(att) //get channel and send embed
// })
