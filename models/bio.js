const { Schema, model } = require("mongoose");
const schema = new Schema({
	User: String,
	Bio: String,
	Pfp: String,
	Post: String,
	Followed: String,
	Follower: Number,	
})
module.exports = model("bio", schema);