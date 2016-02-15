var mongoose = require("mongoose");

var CustomerSchema = new mongoose.Schema({
	name: {type:String, unique:true},
	created_at: {type:Date, default: Date.now },
	orders: [{type: mongoose.Schema.Types.ObjectId, ref:'Order'}]
})

require('./../models/order.js');
var Order = mongoose.model('Order');


CustomerSchema.pre('remove', function(next) {
	
	Order.find({_customer:this._id}) 
		.remove({},function(err) {
			next();
		})
})



var Customer = mongoose.model("Customer",CustomerSchema);