const {MessageEmbed} = require ('discord.js')

module.exports = {
    name : 'report',
    category : 'moderation',
    description : '',
	premium: false, 
	timeout:1000*10,

    
    run : async(client, message, args) => {
      
	  const owner = client.users.cache.get('414329193908797440')
	  
	  const query = args.join (" ")

	  if(!query) return message.channel.send("Please specify the bug you want to report")

	  const reportEmbed = new MessageEmbed()
	  .setTitle('Bug!')
	  .addField('Author', message.author.toString(), true)
	  .addField('Report', query)
	  .addField('Guild', message.guild.name, true)
	  .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
	  .setTimestamp()
		message.channel.send('We are extremely sorry for this issue. Your report has successfully been submitted and will be looked into. \n Regards, The Amberr Team')
	  client.channels.cache.get('853981222295961600').send(reportEmbed);
    }
}