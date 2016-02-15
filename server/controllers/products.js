var mongoose = require("mongoose");
var Product= mongoose.model("Product");
module.exports = {

	index: function(req,res) {
		Product.find({},function(err,products) {
			if(err) {console.log(err);}
			else {res.json(products);}
		})
	},


	create: function(req,res) {
		var _this = this;
		var newProduct = new Product(req.body);
		newProduct.save(function(err) {
			if(err) {res.json(err);}
			else {_this.index(req,res);}
		})
	},

	show: function(req,res) {
		Product.findOne({_id:req.params.id}, 'qty',function(err, product) {
			if (err) {console.log(err);}
			else {res.json(product);}
		})
	}


}
