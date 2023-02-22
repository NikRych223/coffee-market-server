const {Schema, model} = require('mongoose');

const MarketSchema = new Schema({
    title: {type: String, unique: true, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    country: {type: String, required: true},
    price: {type: Number, required: true}
});

module.exports = model('coffee-market', MarketSchema);