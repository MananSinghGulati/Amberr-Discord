const schema = require('../../models/customCommands');
const Discord = require('discord.js');

module.exports = {
	name: 'createcc',
	premium: false,
	timeout: 1000*10,

	run: async (client,message,args) => {
	if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send ("You do not have permision to use this command!");

	const name = args[0]; const response = args.slice(1).join(" ");

	if(!name) return message.channel.send("Please specify a command name");
	if(!response) return message.channel.send("Please specify a response");

	const data = await schema.findOne({ Guild: message.guild.id, Command: name});
	if(data) return message.channel.send("Sheesh, this command already exists, delete it or make a custom command without a name");

	const newData = new schema ({
		Guild: message.guild.id,
		Command:name,
		Response: response
	})

	await newData.save();
	message.channel.send(`Saved **${name}** as a custom command!`)
}
}