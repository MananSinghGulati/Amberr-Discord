const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const { stripIndent } = require('common-tags');

module.exports = {
  name: 'stats',
  timeout: 0.1,
    run: async (client, message, args) => {
        
    const d = moment.duration(client.uptime);
    const days = (d.days() == 1) ? `${d.days()} day` : `${d.days()} days`;
    const hours = (d.hours() == 1) ? `${d.hours()} hour` : `${d.hours()} hours`;
    const seconds = (d.seconds() == 1) ? `${d.seconds()} seconds` : `${d.seconds()} seconds`;
    const minutes = (d.minutes() == 1) ? `${d.minutes()} minutes` : `${d.minutes()} minutes`;
    const clientStats = stripIndent`
      Servers   :: ${client.guilds.cache.size}
      Users     :: ${client.guilds.cache.reduce(
    (prev, guild) => prev + guild.memberCount, 0)}
      Channels  :: ${client.channels.cache.size}
      WS Ping   :: ${Math.round(client.ws.ping)}ms
      Uptime    :: ${days}, ${hours}, ${minutes} and ${seconds}
      Channels  :: ${client.channels.cache.size}
    
    `;
    
    const embed = new MessageEmbed()
      .setTitle('Bot\'s Statistics')
      .setDescription(`\`\`\`asciidoc\n${clientStats}\`\`\``)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
    }
}