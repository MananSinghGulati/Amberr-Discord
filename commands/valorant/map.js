const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
module.exports = {
    name : 'map',
    category : 'valorant',
    description : '',
	premium: false,
timeout:1000,

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
      if (!args[0]) {
	   const noArgs = new Discord.MessageEmbed()
        .setTitle('Missing arguments')
        .setColor(0xFF0000)
        .setDescription('You are missing some args (ex: =map )')
        .setTimestamp()
		message.channel.send (noArgs)
	  }
		// if(args[0] = null) return message.reply("Not a valid map!")

		if (args[0] === 'list') {
			let embed = new Discord.MessageEmbed ()

			.setTitle ("List of all the maps")
			.setDescription(
				"**Ascent** \n**Breeze** \n**Bind** \n **Icebox** \n**Haven** \n**Split**"
			)

			.setImage('https://www.freepnglogos.com/uploads/lokasi-logo-png/lokasi-logo-red-map-location-icon-map-png-0.png')

			message.channel.send (embed)
			return
		}


		
		if (args[0] === 'breeze') {
			let embed = new Discord.MessageEmbed ()

			.setTitle ("Breeze map")

			.setImage('https://news.codashop.com/ph/wp-content/uploads/sites/5/2021/05/New-Map-Breeze.png')

			message.channel.send (embed)
			return
		}

				if (args[0] === 'icebox') {
			let embed = new Discord.MessageEmbed ()

			.setTitle ("Icebox map")

			.setImage('https://storage.googleapis.com/usc-main-portal/production/2020/10/747df2bc-icebox_callouts-1.jpg')

			message.channel.send (embed)
			return
		}

				if (args[0] === 'bind') {
			let embed = new Discord.MessageEmbed ()

			.setTitle ("Bind map")

			.setImage('https://assets.primagames.com/media/files/valorant-bind-map-callouts.jpg/PRIMA/resize/618x0')

			message.channel.send (embed)
			return
		}

				if (args[0] === 'haven') {
			let embed = new Discord.MessageEmbed ()

			.setTitle ("Haven map")

			.setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQflbT1yZziTtxN4-YDIyBhl_locj9n9dZj5qPLHSdtnvQKqyKw8co4myhqe0by7KZ0e_c&usqp=CAU')
			message.channel.send (embed)
			return
		}

				if (args[0] === 'split') {
			let embed = new Discord.MessageEmbed ()

			.setTitle ("Split map")

			.setImage('https://www.earlygame.com/uploads/images/split-map.jpg')

			message.channel.send (embed)
			return
		}

				if (args[0] === 'ascent') {
			let embed = new Discord.MessageEmbed ()

			.setTitle ("Ascent map")

			.setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5Id8-RW8P1AbIjPUo6sgi5ciWG-hocsrjRUkuhN05KZHIw3QzKhgZDFO8CToKB-ObPc&usqp=CAU')

			message.channel.send (embed)
			return
		}

    }
}
