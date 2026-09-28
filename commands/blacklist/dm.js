const Discord = require('discord.js')

module.exports = {
	name: 'dm',
	timeout: 0.1,

	run: async(client,message,args) => {
		const user = message.mentions.users.first();

if (!user) return message.channel.send("Mention someone!");

if (!args[1]) return message.channel.send("Where's the message?");

user.send("*Message sent by " + message.author.tag + "*\n" + args.slice(1).join(" "));

return;

	}
}