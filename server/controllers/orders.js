var mongoose = require("mongoose");
var Order = mongoose.model("Order");
var Customer = mongoose.model('Customer');
var Product = mongoose.model('Product');
module.exports = {
	index: function(req,res) {
		Order.find({})
		.populate('_customer product')
		.exec(function(err,orders) {
			if(err) {console.log(err);}
			else {res.json(orders);}
		})
	},

	create: function(req,res) {
		var _this = this;
		var newQty = req.body.product.qty - req.body.qty;
		Customer.findOne({_id:req.body.customer._id},function(err,customer) {
			var newOrder = new Order({product: req.body.product._id, qty:req.body.qty});
			newOrder._customer = customer._id;
			customer.orders.push(newOrder);
			Product.findOne({_id:req.body.product._id},function(err,product) {
				console.log(product);
				if(err) {console.log(err);}
				product.qty = newQty;
				product.save(function(err) {
					if(err) {console.log(err);}
					else {
						newOrder.save(function(err) {
							if(err){console.log(err);}
							else {
								customer.save(function(err) {
									if(err){console.log(err);}
									else {
										_this.index(req,res);
									}
								})
							}
						})
					}

				})
			})
		
	})

	}



}


