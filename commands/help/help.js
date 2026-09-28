const pagination = require("discord.js-pagination");
const Discord = require("discord.js");

module.exports = {
  name: "help",
  timeout: 0.1,

  run: async (client, message, args) => {
    const fun = new Discord.MessageEmbed()
      .setTitle("Fun!")
	  
      .addField("`8ball`", " Tells the answer to your question")

      .addField("`Meme`", " Displays some of the finest memes on Reddit")

      .addField("`tictactoe`", " A classic game of tictactoe")

      .addField(
        "`chaoswords`",
        " Find 2 words inside a random collection of letters"
      )

      .addField("`wyr`", "Would you rather?")

      .addField("`Ascii`", "send your text as ascii!")

      .addField("`ftype`", "Type the sentence as fast as you can!")


      .addField("`hangman`", "keel that stickman!")


      .setTimestamp();

    const Utility = new Discord.MessageEmbed()
      .setTitle("Utility")
      .addField(
        "`Covid`",
        "Tells the covid cases for a specific country or the entire world combined"
      )

      .addField("`anime`", "get info about an anime")
      .addField("`Ping`", "Tells the latency of the bot")
      .addField("`Invite`", "Gives the invite link for the bot")
    //   .addField("`Vote`", "Gives the top.gg voting link for the bot")
      .addField("`Purge`", "Clears specific amount of messages")
	  .addField("`Report`", "Send a bug or report a user to the moderation team, unnecessary use of this command will get a blacklist")
      .setTimestamp();

    const Image = new Discord.MessageEmbed()

      .setTitle("Image")
      .addField("`Avatar`", "Shows the avatar specified user's avatar ")
      .addField(
        "`Triggered`",
        "Manipulates the user's avatar and puts a trigger meme on it"
      )
      .addField("`slap`", "slap someone")

      .setTimestamp();

    const DankMemer = new Discord.MessageEmbed()
      .setTitle("Dank-Memer! (disabled)")
      .addField(
        "`heist`",
        "Unlocks a channel for a **specific** role mentioned"
      )
      .addField("`Over`", "Locks the channel for the role mentioned")
      .addField(
        "`Value (coming soon!)`",
        "tells the average market value for an item"
      )
      .setTimestamp();


	const Bio = new Discord.MessageEmbed()
	.setTitle("Bio")
	.setDescription("This section of AuraBot commands is currently in beta. The commands might not function properly. Please report any bugs using")

    const Economy = new Discord.MessageEmbed()

      .setTitle("Economy")
      .setDescription("`Note: if you have premium , there will be money bonus`")
    //   .addField("`beg`", "begs people for money ")
    //   .addField("`Search`", "Scout's the area for money")
      .addField(
        "`Pokemon`",
        "Play Who'se The Pokemon and recieve 3000 coins upon giving the correct answer"
      )
      .addField("`daily`", "gives daily coins (1000)")
      .addField(
        "`give`",
        "give the mentioned user the specified amount of coins from your balance"
      )
      .addField("`work`", "work hard and earn moni :D")
      .addField(
        "`bet`",
        "gamble your hard-earnt moni and have a chance to double it or risk it"
      )
      .setTimestamp();

    const Valorant = new Discord.MessageEmbed()
      .setTitle("Valorant")
      .addField(
        "`Map`",
        "This command shows the callout of any map inside valorant"
      )
      .addField(
        "`Agent`",
        "This command shows the info on any agent in the game"
      )

      .setTimestamp();

    if (args[0] === "8ball") {
      let embed = new Discord.MessageEmbed()

        .setTitle("8ball command")
        .setDescription(
          "Let the magic 8ball answer your questions! \n usage: =8ball <question>"
        )

        .setImage("http://simpleicon.com/wp-content/uploads/eight-ball.png");

      message.channel.send(embed);
      return;
    }

    if (args[0] === "cwords") {
      let embed = new Discord.MessageEmbed()

        .setTitle("ChaoWords command")
        .setDescription(
          "Try your best to find two words inside a set of jumbled letters! \n usage: =cwords"
        )

        .setImage(
          "https://lh3.googleusercontent.com/proxy/6yPf4eJbxXzRrWVSzPvZTjzky2ZwlnaTUqIY4ll3rWfHwTcxHe7sdmh3TeUdyjpL8TYIGm-SrG-_l8GV_9a_LXECz1mRydvutpCXrADcYPW5p-4po6JPbd3BJGA"
        );

      message.channel.send(embed);
      return;
    }

    if (args[0] === "ftype") {
      let embed = new Discord.MessageEmbed()

        .setTitle("FastType command")
        .setDescription(
          "Type the sentence as fast as you can! \n usage: =ftype"
        )

        .setImage(
          "https://www.freeiconspng.com/thumbs/faster-icon-png/faster-icon-png-0.png"
        );

      message.channel.send(embed);
      return;
    }

    
    if (args[0] === "hangman") {
      let embed = new Discord.MessageEmbed()

        .setTitle("Hangman command")
        .setDescription(
          "Play a game of hangman! \n usage: =hangman #channel <word>"
        )

        .setImage(
          "https://upload.wikimedia.org/wikipedia/commons/7/70/Hangman-2.png"
        );
      message.channel.send(embed);
      return;
    }

    const pages = [fun, Image, Utility, Economy, Valorant, DankMemer];

    const emojiList = ["⏪", "⏩"];

    const timeout = "120000";

    pagination(message, pages, emojiList, timeout);
  },
};