const m = require('mongoose');

module.exports = m.model(
	'passive',
	 new m.Schema({
		 User: String,
}))