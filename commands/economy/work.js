const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
module.exports = {
    name : 'work',
    category : 'ecnomy',
    description : 'work',
	premium: false ,
	timeout: 1000*60, 
    
    run : async(client, message, args) => {
      
		const jobs = ['Programmar','Builder','Waiter','Chef','Driver', 'Doctor', 'Teacher', 'Mechanic'];
		const jobIndex = Math.floor(Math.random() * jobs.length);
		const coins = Math.floor(Math.random() * 1000) + 1;

		message.channel.send(`You worked as a **${jobs[jobIndex]}** and earned **${coins}** coins`);

		client.add(message.author.id, coins);
    }
}