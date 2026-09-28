const client = require ('../index.js');
const { MessageEmbed } = require ('discord.js');

client.on ('guildCreate', (guild) => {
	let targetChannel;
	
	guild.channels.cache.forEach((channel) => {
		if (channel.type === 'text' && !targetChannel && channel.permissionsFor(guild.me).has("SEND_MESSAGES")) targetChannel = channel
	})

	if (!targetChannel) return;

	targetChannel.send (
		new MessageEmbed ()
		 
      .setColor('RED')
      .setDescription(`Hey Peeps! I'm **Amberr** Your new Discord Best friend.\n\nThank you for inviting me to your server, it means a lot to us! You can get started with =help & view the list of all my commands!\n__**Current News**__\n\`\`\`\nDue to users inviting the bot to fake servers, now the servers need to have a minimu of 10 members or the bot will automatically leave.\`\`\`\n\nAgain, thank you for inviting me! (this server is now very pog)\n**- Amberr**`)
      .addField(
        '\u200b', 
        '**[Invite](https://discord.com/oauth2/authorize?client_id=873056622858088498&scope=bot&permissions=8589934591) | ' +
        '[Support Server](https://discord.com/invite/rx2eeX6mBh) | ' +
        '[TOP.GG](https://top.gg/bot/873056622858088498#/)**'
      )
	)
})