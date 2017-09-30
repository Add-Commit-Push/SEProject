var mongoose = require('mongoose');


var MenuItemSchema = new mongoose.Schema({
    menuItemname: {type: String, required: [true, "Needs a name"]},
    menuItemdiscription: String,
    menuItemimage: String,
    storkprice: String,
    menuprice: Number,
    servingtime: String, //breakfast lunch or dinner
    menuItemavailability: Boolean,//dismissed, working, paternity/maternity...
    keyingredients: [{
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    }]
}, {timestamps: true});

mongoose.model('MenuItem', MenuItemSchema);
