const Discord = require ('discord.js')
module.exports = {
  name: "bet",
  aliases: ["gamble", "gmb", "moni"],
  category: "",
  description: "",
  premium: false,
  timeout: 1000*7 ,

  run: async (client, message, args) => {
    if (!args[0])
      return message.channel.send(
        "Stop trying to scam me, specify an amount to bet"
      );

    if (isNaN(args[0])) return message.reply("Argument must be a number");

    const betAmount = parseInt(args[0]);

    if ((await client.bal(message.author.id)) < betAmount)
      return message.channel.send(
        "Scammer why are u doing this! Always gamble what you can afford"
      );

    function random() {
      const num = Math.floor(Math.random() * 2);
    
      return num === 1;
    
    }

    
    const user = message.author.id;

    if (random() === true) {
        
		 const winBet = Math.floor(betAmount * 1.5);
          client.add(message.author.id, winBet);

		  let bal = await client.bal(message.author.id);
     
      const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag}'s winning game`)
        .setDescription(`You won ${winBet} coins!`)
        .addField("Your current balance is: ", bal + winBet)
		.setColor("RANDOM")
      message.channel.send(embed);

    
    } else {
       
        client.rmv(message.author.id, betAmount);

         const bal = await client.bal(message.author.id);
      const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag}'s losing`)
        .setDescription(`You lost ${betAmount} coins!`)
        .addField("Your current balance is: ", bal - betAmount)

        .setColor("RANDOM")
      message.channel.send(embed);

      
    }
  },
};