const { MessageEmbed } = require ("discord.js");
const Discord = require('discord.js')
module.exports = {
	name: "slots",

	premium: false,
	timeout: 1000*9,

	run: async (client,message,args) => {

		const slotemoji = ':money_mouth:';
		let items = ['💵','💍','💯'];

		let $ = items[Math.floor(items.length * Math.random())];
		let $$ = items[Math.floor(items.length * Math.random())];
		let $$$ = items[Math.floor(items.length * Math.random())];


		const play = new MessageEmbed()
		.setTitle(`${message.author.tag}'s slots game`)
		.setDescription("• "+slotemoji+"  "+slotemoji+"  "+slotemoji+" •")
		.setColor('RANDOM')
  		.setFooter("are you lucky?")


	const $1 = new Discord.MessageEmbed()
     .setTitle("Slot Machine")
     .setDescription("• "+$+"  "+slotemoji+"  "+slotemoji+" •")
     .setColor('RANDOM')
     .setFooter("are you lucky?")
 
	const $2 = new Discord.MessageEmbed()
     .setTitle("Slot Machine")
     .setDescription("• "+$+"  "+$$+"  "+slotemoji+" •")
     .setColor('RANDOM')
     .setFooter("are you lucky?")
 
 
	const $3 = new Discord.MessageEmbed()
     .setTitle("Slot Machine")
     .setDescription("• "+$+"  "+$$+"  "+$$$+" •")
     .setColor('RANDOM')
     .setFooter("are you lucky?")


		const bal = await client.bal(message.author.id)

	if(!args[0]) return message.channel.send("Specify an amount to risk in the slots machine")

	if (isNaN(args[0])) return message.channel.send ("That is not a number idiot, smh.")

	if (bal < 2000) return message.channel.send("You need atleast 2000 for the slots machine!")

	if (args[0] > bal) return message.channel.send("Bruh, you dont have that many coins. Next time , try with something you have,smh.")

	const slotsAmount = args[0]







	 let spinner  = await message.channel.send(play)

	 setTimeout(() => {
		 spinner.edit($1)
	 }, 600);
	 
	 	 setTimeout(() => {
		 spinner.edit($2)
	 }, 1200);

	 	 setTimeout(() => {
		 spinner.edit($3)
	 }, 1800);


	 if ($$ !== $ && $$ !== $$$) {
		 setTimeout(() => {
			 message.channel.send(`You lost ${slotsAmount} noob`)
			client.rmv (message.author.id, slotsAmount)
			return;
			 
		 }, 2000)
	 }


	  if ($ === $$ && $ === $$$) {
		 setTimeout(() => {
			 message.channel.send("You won , noice")
			 client.add(message.author.id, slotsAmount*2)
		 }, 2000)

		 	client.add(message.author.id)
	 } else {
		 message.channel.send("You lost noob")
		 client.rmv(message.author.id, slotsAmount)
		 return;
	 }


	}
}	