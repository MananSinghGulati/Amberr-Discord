const { Client, Message, MessageEmbed } = require("discord.js");
const Schema = require(`../../models/bio`);
module.exports = {
  name: "bio",
  timeout: 1000*2,

  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const p = '='
    let member = message.mentions.members.first();
    if (!member) {
      member = message.member;
    }
    
    Schema.findOne({ User: member.id }, async (err, data) => {
        if (!data.Bio) {
            let emnbed = new MessageEmbed({
                 title: "Error!",
                description: `${member.toString()} doesn't have a bio`,
                color: "RANDOM",
               });
                return message.reply(emnbed);

        }
      
          if (!data.Pfp) return message.channel.send("You need a pfp noob");

      let embed1 = new MessageEmbed()
      .setTitle(`${member.user.tag}'s Bio`)
      .setDescription(data.Bio)
      .setColor("RANDOM")
      .setFooter(`Use \`${p}set-bio <bio>\` to set your bio`)
      .setThumbnail(data.Pfp)
	  .addField('`post`', 'This is the users most recent post:')
	  .setImage(data.Post)
    return message.reply(embed1);    
    });
 

  },
};