const schema = require('../../models/customCommands');
const Discord = require('discord.js');

module.exports = {
	name: 'delcc',
	premium: true,
	timeout: 1000*10,

	run: async (client,message,args) => {
	if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send ("You do not have permision to use this command!");

	const name = args[0]; const response = args.slice(1).join(" ");

	if(!name) return message.channel.send("Please specify a command name");

	const data = await schema.findOne({ Guild: message.guild.id, Command: name});

	if(!data) return message.channel.send ("That custom-command does not exist!");

	await schema.findOneAndDelete({Guild: message.guild.id, Command: name})

	message.channel.send(`Removed ${name} from the custom commands in this server.`)
}
}