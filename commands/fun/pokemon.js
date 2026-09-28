const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  name: "pokemon",
  category: "",
  description: "",
  premium: false,
  timeout: 10000,

  run: async (client, message, args) => {
    const fetch = require("node-fetch");
    const Discord = require("discord.js");
    fetch(`https://api.dagpi.xyz/data/wtp`, {
      headers: {
        Authorization:
          "api token here",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const pok = new Discord.MessageEmbed()
          .setTitle(`Who's That Pokemon?`)
          .addField(`Type:`, `${data.Data.Type}`, true)
          .addField(`Abilities:`, `${data.Data.abilities}`)
          .setImage(data.question)
          .setFooter(`You have Unlimited Chances! Type stop to stop the game`);

        const right = new Discord.MessageEmbed()
          .setTitle(`You Guessed It Right!`)
          .setAuthor(message.author.tag)
          .setURL(data.Data.Link)
          .setDescription(`It was ${data.Data.name}`)
          .setImage(data.answer);

        const wrong = new Discord.MessageEmbed()
          .setTitle(`You Lost`)
          .setAuthor(message.author.tag)
          .setURL(data.Data.Link)
          .setDescription(`It was ${data.Data.name}`)
          .setImage(data.answer);

        const reward = 3000;

        message.channel.send(pok);
        const gameFilter = (m) => m.author.id;
        const gameCollector =
          message.channel.createMessageCollector(gameFilter);

        gameCollector.on("collect", async (msg) => {
          if (msg.author.bot) return;
          const selection = msg.content.toLowerCase();
          if (selection === data.Data.name.toLowerCase()) {
            message.reply(right);
			message.channel.send('You have been given **3000** as the reward')
            gameCollector.stop();
            client.add(message.author.id, reward);
          } else if (selection === "stop") {
            message.channel.send(wrong);
            gameCollector.stop();
          } else if (selection !== data.Data.name) {
            message.channel.send(
              `Wrong Guess Try Again! - Type stop to cancel the Game`
            );
          }
        });
      });
  },
};