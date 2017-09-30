var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
  item: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
  name: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  additinalnotes: String,
  deliveryandress: {
      first: String,
      second: String,
      third: String,
      areacode: Number,
      city: String,
      province: String
  },
  article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article' }
}, {timestamps: true});

// Requires population of author
OrderSchema.methods.toJSONFor = function(user){
  return {
    id: this._id,
    body: this.body,
    createdAt: this.createdAt,
    author: this.author.toProfileJSONFor(user)
  };
};

mongoose.model('Order', OrderSchema);
