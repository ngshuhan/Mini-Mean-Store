var mongoose = require("mongoose");
var Customer = mongoose.model("Customer");
module.exports = {

	index: function(req,res) {
		Customer.find({},function(err,customers) {
			if(err) {console.log(err);}
			else {res.json(customers);}
		})
	},


	create: function(req,res) {
		var _this = this;
		var newCustomer = new Customer(req.body);
		newCustomer.save(function(err) {
			if(err) {console.log(err);res.json(err);}
			else {_this.index(req,res);}
		})
	},

	delete: function(req,res) {
		var _this = this;
		console.log('remove');


		Customer.findOne({_id:req.params.id},function(err,customer) {

			customer.remove(function(err){
				_this.index(req,res);

			});
		})
	}



}
