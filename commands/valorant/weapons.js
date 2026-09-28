const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
module.exports = {
    name : 'weapon',
	aliases: ['weapons'],
    category : 'valorant',
    description : '',
	premium: true,
timeout:1000,

    
    run : async(client, message, args) => {
      

      if (!args[0]) {
	   const noArgs = new Discord.MessageEmbed()
        .setTitle('Missing arguments')
        .setColor(0xFF0000)
        .setDescription('You are missing some args (ex: =weapon odin )')
        .setTimestamp()
		message.channel.send (noArgs)
	  }
		

		
		if (args[0] === 'ares') {
			let embed = new Discord.MessageEmbed ()

			.setTitle ("Ares")
			.setColor("RED")
			.setImage('https://github.com/Henrik-3/valorant-labs/blob/master/commands/images/weapon/Ares/Ares-Englisch.png?raw=true')

			message.channel.send (embed)
			return
		}

		if (args[0] === 'bucky') {
			let embed = new Discord.MessageEmbed ()

			.setTitle ("Bucky")
			.setColor("RED")
			.setImage('https://github.com/Henrik-3/valorant-labs/blob/master/commands/images/weapon/Bucky/Bucky-Englisch.png?raw=true')

			message.channel.send (embed)
			return
		}

		if (args[0] === 'bulldog') {
			let embed = new Discord.MessageEmbed ()

			.setTitle ("Bulldog")
			.setColor("RED")
			.setImage('https://github.com/Henrik-3/valorant-labs/blob/master/commands/images/weapon/Bulldog/Bulldog-Englisch.png?raw=true')

			message.channel.send (embed)
			return
		}

				if (args[0] === 'classic') {
			let embed = new Discord.MessageEmbed ()

			.setTitle ("Classic")
			.setColor("RED")
			.setImage('https://github.com/Henrik-3/valorant-labs/blob/master/commands/images/weapon/Classic/Classic-Englisch.png?raw=true')

			message.channel.send (embed)
			return
		}

				if (args[0] === 'frenzy') {
			let embed = new Discord.MessageEmbed ()

			.setTitle ("Frenzy")
			.setColor("RED")
			.setImage('https://github.com/Henrik-3/valorant-labs/blob/master/commands/images/weapon/Frenzy/Frenzy-Englisch.png?raw=true')

			message.channel.send (embed)
			return
		}

		
				if (args[0] === 'ghost') {
			let embed = new Discord.MessageEmbed ()

			.setTitle ("Ghost")
			.setColor("RED")
			.setImage('https://github.com/Henrik-3/valorant-labs/blob/master/commands/images/weapon/Ghost/Ghost-Englisch.png?raw=true')

			message.channel.send (embed)
			return
		}

				if (args[0] === 'guardian') {
			let embed = new Discord.MessageEmbed ()

			.setTitle ("Guardian")
			.setColor("RED")
			.setImage('https://github.com/Henrik-3/valorant-labs/blob/master/commands/images/weapon/Guardian/Guardian-Englisch.png?raw=true')

			message.channel.send (embed)
			return
		}

				if (args[0] === 'judge') {
			let embed = new Discord.MessageEmbed ()

			.setTitle ("Judge")
			.setColor("RED")
			.setImage('https://github.com/Henrik-3/valorant-labs/blob/master/commands/images/weapon/Judge/Judge-Englisch.png?raw=true')

			message.channel.send (embed)
			return
		}

		
				if (args[0] === 'marshal') {
			let embed = new Discord.MessageEmbed ()

			.setTitle ("Marshal")
			.setColor("RED")
			.setImage('https://github.com/Henrik-3/valorant-labs/blob/master/commands/images/weapon/Marshal/Marshal-Englisch.png?raw=true')

			message.channel.send (embed)
			return
		}


		if (args[0] === 'odin') {
			let embed = new Discord.MessageEmbed ()

			.setTitle ("Odin")
			.setColor("RED")
			.setImage('https://github.com/Henrik-3/valorant-labs/blob/master/commands/images/weapon/Odin/Odin-Englisch.png?raw=true')

			message.channel.send (embed)
			return
		}

		
		if (args[0] === 'operator') {
			let embed = new Discord.MessageEmbed ()

			.setTitle ("Operator")
			.setColor("RED")
			.setImage('https://github.com/Henrik-3/valorant-labs/blob/master/commands/images/weapon/Operator/Operator-Englisch.png?raw=true')

			message.channel.send (embed)
			return
		}

		if (args[0] === 'phantom') {
			let embed = new Discord.MessageEmbed ()

			.setTitle ("Phantom")
			.setColor("RED")
			.setImage('https://github.com/Henrik-3/valorant-labs/blob/master/commands/images/weapon/Phantom/Phantom-Englisch.png?raw=true')

			message.channel.send (embed)
			return
		}

				if (args[0] === 'sherrif') {
			let embed = new Discord.MessageEmbed ()

			.setTitle ("Sherrif")
			.setColor("RED")
			.setImage('https://github.com/Henrik-3/valorant-labs/blob/master/commands/images/weapon/Sherrif/Sherrif-Englisch.png?raw=true')

			message.channel.send (embed)
			return
		}

				if (args[0] === 'shorty') {
			let embed = new Discord.MessageEmbed ()

			.setTitle ("Shorty")
			.setColor("RED")
			.setImage('https://github.com/Henrik-3/valorant-labs/blob/master/commands/images/weapon/Shorty/Shorty-Englisch.png?raw=true')

			message.channel.send (embed)
			return
		}


    }
}
