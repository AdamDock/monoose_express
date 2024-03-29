const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be blank']
    },
    price: {
        type: Number,
        required: [true, 'Price cannot be blank'],
        min: 0
    },
    category: {
        type: String,
        enum: ['fruit', 'vegetable', 'dairy'],
        lowercase: true
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;