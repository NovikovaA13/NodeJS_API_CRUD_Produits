const mongoose = require('mongoose');
const mySchema = mongoose.Schema(
{
    "name": String,
    "description": String,
    "price": Number,
    "inStock": Boolean
});
module.exports = mongoose.model('Product', mySchema);