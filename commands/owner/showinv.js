const Discord = require('discord.js')


module.exports = {
name: 'showinv',
timeout: 0.1,


run: async(client,message,args) => {
	 var invites = []; // starting array
    client.guilds.cache.forEach(async (guild) => { // iterate loop on each guild bot is in

      // get the first channel that appears from that discord, because
      // `.createInvite()` is a method for a channel, not a guild.
      const channel = guild.channels.cache 
        .filter((channel) => channel.type === 'text')
        .first();
      if (!channel || guild.member(client.user).hasPermission('CREATE_INSTANT_INVITE')) return;
      await channel
        .createInvite({ maxAge: 0, maxUses: 0 })
        .then(async (invite) => {
          invites.push(`${guild.name} - ${invite.url}`); // push invite link and guild name to array
        })
        .catch((error) => console.log(error));
      console.log(invites);
    });
}
}