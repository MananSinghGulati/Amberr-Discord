const discord = require('discord.js')

module.exports = {
  name: "search",
  premium: false,
  timeout: 0.1,
  cooldown: 1000 * 60,
  aliases: [],
 /**
     * @param {client} client
     * @param {message} message
     * @param {string[]} args
     */
  run: async(client, message, args) =>{
    const LOCATIONS = [
      "car",
      "sock",
      "milk",
      "wallet",
      "box",
      "pocket",
      "bus",
      "gutters",
      "park",
      "train",
      "lounge",
      "keyboard",
      "picnic",
      "bathroom",
      "bed",
      "sofa",
      "backpack",
      "laptop",
      "oculus",
      "shirt",
      "step mom house",
    ];

    let chosenLocations = LOCATIONS.sort(() => Math.random() - Math.random()).slice(0, 3);

    const RANDOM_NUMBER = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

    const FILTER = (m) => {
      return chosenLocations.some((answer) => answer.toLowerCase() === m.content.toLowerCase()) && m.author.id === message.author.id;
    };

    const COLLECTOR = message.channel.createMessageCollector(FILTER, { max: 1, time: 15000 });

    COLLECTOR.on("collect", async (m) => {
      const EMBED = new discord.MessageEmbed()
        .setColor("#ffa500")
        .setTitle(`${message.author.username} searched a ${m.content} 🕵️`)
        .setDescription(`You found ${RANDOM_NUMBER.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`)
        .setFooter(`A true detective you are.`);
      message.channel.send(EMBED);
      client.add(message.author.id, RANDOM_NUMBER)
    });

    COLLECTOR.on("end", (collected) => {
      if (collected.size == 0) {
        return message.channel.send(
          `What are you doing <@${message.author.id}>?! There was ${RANDOM_NUMBER.toString().replace(
            /\B(?=(\d{3})+(?!\d))/g,
            ","
          )} hidden inside the ${chosenLocations[0]} :sob:`
        );
      }
    });

    message.channel.send(
      `<@${
        message.author.id
      }>\n**Which location would you like to search?** :mag:\nType the location in this channel.\n\`${chosenLocations.join("` `")}\``
    );
  },
};