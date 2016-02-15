var mongoose = require("mongoose");
var OrderSchema = new mongoose.Schema({
	_customer: {type:mongoose.Schema.Types.ObjectId, ref:'Customer'},
	created_at: {type: Date, default: Date.now},
	product: {type: mongoose.Schema.Types.ObjectId, ref:'Product'},
	qty: Number
})

var Order = mongoose.model("Order",OrderSchema);