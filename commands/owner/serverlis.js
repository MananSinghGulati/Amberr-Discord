const Discord = require("discord.js");
const ownerid = ["791379233229504543"];
const ownerid2 = ["293022381021069312"];


module.exports = {
 name: 'serverlist',
 timeout: 0.1,
  run: async (client, message, args) => {

	  if(message.author.id != '414329193908797440') return;
    if (message.author.id == ownerid || ownerid2) {
      if (!message.guild.me.hasPermission("MANAGE_GUILD"))
        return message.channel
          .send("I Dont Have Permissions")
          .then(msg => msg.delete({ timeout: 5000 }));

      let i0 = 0;
      let i1 = 10;
      let page = 1;

      let description =
        `Total Servers - ${client.guilds.cache.size}\n\n` +
        client.guilds.cache
          .sort((a, b) => b.memberCount - a.memberCount)
          .map(r => r)
          .map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Members\nID - ${r.id}`)
          .slice(0, 10)
          .join("\n");

      let embed = new Discord.MessageEmbed()
        .setAuthor(
          message.author.tag,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setColor("GREEN")
        .setFooter(client.user.username)
        .setTitle(`Page - ${page}/${Math.ceil(client.guilds.cache.size / 10)}`)
        .setDescription(description);

      let msg = await message.channel.send(embed);

      await msg.react("⬅");
      await msg.react("➡");
      await msg.react("❌");

      let collector = msg.createReactionCollector(
        (reaction, user) => user.id === message.author.id
      );

      collector.on("collect", async (reaction, user) => {
        if (reaction._emoji.name === "⬅") {
          // Updates variables
          i0 = i0 - 10;
          i1 = i1 - 10;
          page = page - 1;

          // if there is no guild to display, delete the message
          if (i0 + 1 < 0) {
            console.log(i0)
            return msg.delete();
          }
          if (!i0 || !i1) {
            return msg.delete();
          }

          description =
            `Total Servers - ${client.guilds.cache.size}\n\n` +
            client.guilds.cache
              .sort((a, b) => b.memberCount - a.memberCount)
              .map(r => r)
              .map(
                (r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Members\nID - ${r.id}`
              )
              .slice(i0, i1)
              .join("\n");

          // Update the embed with new informations
          embed
            .setTitle(
              `Page - ${page}/${Math.round(client.guilds.cache.size / 10 + 1)}`
            )
            .setDescription(description);

          // Edit the message
          msg.edit(embed);
        }

        if (reaction._emoji.name === "➡") {
          // Updates variables
          i0 = i0 + 10;
          i1 = i1 + 10;
          page = page + 1;

          // if there is no guild to display, delete the message
          if (i1 > client.guilds.cache.size + 10) {
            return msg.delete();
          }
          if (!i0 || !i1) {
            return msg.delete();
          }

          description =
            `Total Servers - ${client.guilds.cache.size}\n\n` +
            client.guilds.cache
              .sort((a, b) => b.memberCount - a.memberCount)
              .map(r => r)
              .map(
                (r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Members\nID - ${r.id}`
              )
              .slice(i0, i1)
              .join("\n");

          // Update the embed with new informations
          embed
            .setTitle(
              `Page - ${page}/${Math.round(client.guilds.cache.size / 10 + 1)}`
            )
            .setDescription(description);

          // Edit the message
          msg.edit(embed);
        }

        if (reaction._emoji.name === "❌") {
          return msg.delete();
        }

        // Remove the reaction when the user react to the message
        await reaction.users.remove(message.author.id);
      });
    } else {
      return;
    }
// 	const guilds = client.guilds.cache.array();

// const generateEmbed = start => {
//   const current = guilds.slice(start, start + 10)

//   // you can of course customise this embed however you want
//   const embed = new Discord.MessageEmbed()
//     .setTitle(`Showing guilds ${start + 1}/${start + current.length} out of ${guilds.length}`)
//   current.forEach(g => embed.addField(g.name, `**ID:** ${g.id}
// **Owner:** ${g.owner.user.tag}`) )
//   return embed
// }

// // edit: you can store the message author like this:
// const author = message.author

// // send the embed with the first 10 guilds
// message.channel.send(generateEmbed(0)).then(message => {
//   // exit if there is only one page of guilds (no need for all of this)
//   if (guilds.length <= 10) return
//   // react with the right arrow (so that the user can click it) (left arrow isn't needed because it is the start)
//   message.react('➡️')
//   const collector = message.createReactionCollector(
//     // only collect left and right arrow reactions from the message author
//     (reaction, user) => ['⬅️', '➡️'].includes(reaction.emoji.name) && user.id === author.id,
//     // time out after a minute
//     {time: 60000}
//   )

//   let currentIndex = 0
//   collector.on('collect', reaction => {
//     // remove the existing reactions
//     message.reactions.removeAll().then(async () => {
//       // increase/decrease index
//       reaction.emoji.name === '⬅️' ? currentIndex -= 10 : currentIndex += 10
//       // edit message with new embed
//       message.edit(generateEmbed(currentIndex))
//       // react with left arrow if it isn't the start (await is used so that the right arrow always goes after the left)
//       if (currentIndex !== 0) await message.react('⬅️')
//       // react with right arrow if it isn't the end
//       if (currentIndex + 10 < guilds.length) message.react('➡️')
//     })
//   })
// })
  }
};