const Discord = require('discord.js');
const client = require('../index.js')

client.on ("guildCreate", async guild => {
//   	let targetChannel;
	
// 	guild.channels.cache.forEach((channel) => {
// 		if (channel.type === 'text' && !targetChannel && channel.permissionsFor(guild.me).has("SEND_MESSAGES")) targetChannel = channel
// 	})

// 	if (!targetChannel) return;

//   if(guild.memberCount < 10 ) {
// 	guild.owner.send('I am going to leave this server as it has below 15 members. you can re invite me after reaching 15 members')
// 	targetChannel.send('I am going to leave this server as it has below 15 members. you can re invite me after reaching 15 members')
// 	guild.leave().catch(() => {})
  
//   }



    const channel = await client.channels.cache.get('872860098790326302');
    const m = new Discord.MessageEmbed()
        .setTitle(`Just joined ${guild.name}`)
        .setFooter(`Total servers : ${client.guilds.cache.size} | Members : ${guild.memberCount}`)
        .setColor('GREEN');
    channel.send(m);

    
   
});

