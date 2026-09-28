const passiveSchema = require('../../models/passive')


module.exports = {
    name : 'passive',
    category : '',
    description : '',
	premium: false ,
	timeout: 1000* 60*60*5, 
    
    run : async(client, message, args) => {
      if (args[0] === 'true') {
				passiveSchema.findOne({
			User: message.author.id
		}, async (err, data) => {
			if(data) return message.reply ('Passive is enabled!')

			new passiveSchema({
					User: message.author.id
			}).save()
				return message.reply (`Successfully enabled passive`)
		})
	  }

	     if (args[0] === 'false') {
					passiveSchema.findOne({
			User: message.author.id
		}, async (err, data) => {
			if(!data) return message.reply('You are not in passive!')

			data.delete();

			message.channel.send ('Passive has been disabled')
		})
	  }

    }
}