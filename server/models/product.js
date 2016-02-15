var mongoose = require("mongoose");
var ProductSchema = new mongoose.Schema({
	name: String,
	imageUrl: String,
	description: String,
	qty: Number
})

var Product = mongoose.model("Product",ProductSchema);