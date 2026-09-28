const client = require ('../index');
const config = require('../config.json');
const { prefix, token } = require("../config.json");
const { Discord, MessageEmbed } = require ('discord.js');
const { Collection } = require('discord.js');
const Timeout = new Collection();
const ecoSchema = require ('../models/economy');
const premiumSchema = require('../models/premium');
const guildPremium = require('../models/guild_Premium');
const ccSchema = require('../models/customCommands');
const blacklist = require ('../models/blacklist');
const mongo = require ('mongoose');
const ms = require('ms');
const Afk = require('../models/afk-schema')



client.on('message', async message => {
	const mentionRegex = RegExp(`^<@!?${client.user.id}>$`);
			
	if (message.content.match(mentionRegex)) {
		
		const proofita = `\`\`\`css\n[     Prefix: '='     ]\`\`\``;
        const proofitaa = `\`\`\`css\n[      Help: '=help'    ]\`\`\``;
        const embed = new MessageEmbed()
          .setTitle('Hello, I\'m Amberr. What\'s Up?')
          .addField(`Prefix`,proofita, true)
          .addField(`Usage`,proofitaa, true)
          .setDescription(`\nIf you like me, Consider [voting](https://top.gg/bot/873056622858088498#/vote), or [inviting](https://discord.com/oauth2/authorize?client_id=808204942786691133&scope=bot&permissions=2147483647)`)
          .setFooter('Thank you for using Amberr!!')
          .setColor('#FF2C98')

		message.channel.send (embed)
	 }
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
	//     if (await Afk.findOne({ userID: message.author.id })) {
    //     let afkProfile = await Afk.findOne({ userID: message.author.id });
    //     if (afkProfile.messageLeft == 1) {
    //         await Afk.findOneAndDelete({ userID: message.author.id });
    //         message.channel.send("You are out of AFK mode")
    //     } else {
    //         await Afk.findOneAndUpdate({ userID: message.author.id }, { messageLeft: afkProfile.messageLeft - 1 });
    //     }

    // }

	blacklist.findOne({ id: message.author.id}, async(err, data) => {
		
		if (err) throw err
		if (!data) {

			    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
	const ccdata = await ccSchema.findOne({ Guild: message.guild.id , Command: cmd });
	if (ccdata) message.channel.send(ccdata.Response)

    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
	
	client.bal = (id) => new Promise (async ful => {
		const data = await ecoSchema.findOne({ id })
		if(!data) return ful (0)
		ful (data.coins)
	})

	client.add = (id, coins) => {
		ecoSchema.findOne({ id }, async(err,data) => {
			if (err) throw err;
			if (data) {
				data.coins += coins
			} else {
				data = new ecoSchema({ id, coins })
			}

			data.save()
		})
	}

		client.rmv = (id, coins) => {
		ecoSchema.findOne({ id }, async(err,data) => {
			if (err) throw err;
			if (data) {
				data.coins -= coins
			} else {
				data = new ecoSchema({ id, coins: -coins })
			}

			data.save()
		})
	}

	if (command.premium && !(await premiumSchema.findOne( { User: message.author.id }))) return message.reply ('You need premium to use this command! Join our support server for more info!')
    if (command) {
        if(command.timeout) {
            if(Timeout.has(`${command.name}${message.author.id}`)) return message.channel.send(`Honey, you need to wait \`${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), {long : true})}\` before using this command again.`)
            command.run(client, message, args)
            Timeout.set(`${command.name}${message.author.id}`, Date.now() + command.timeout)
            setTimeout(() => {
                Timeout.delete(`${command.name}${message.author.id}`)
            }, command.timeout)
        } else { 
            console.log('command.timeout returns undefined')
        }
    } else {
  command.run(client, message, args)
    }
    } else {
    return message.reply('You are blacklisted from the bot!');
    }
    })
})