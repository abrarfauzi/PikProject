const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    location: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    spaceInMeters: {
        type: Number,
        required: true
    },
    pictures: [{
        data: Buffer, // Store binary data
        contentType: String // Mime type of the image
    }]
});

const Property = mongoose.model('Property', propertySchema);

module.exports = {
    Property,
};