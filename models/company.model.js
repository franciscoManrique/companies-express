const mongoose = require('mongoose');
const companySchema = new mongoose.Schema( {
    name: {
        type: String, 
        required: [true, 'Name is required and unique'],
        unique: true
    },
    code: {
        type: String, 
        required: [true, 'Code is required']
    }, 

    image: {
        type: String, 
        required: [true, 'Image is required']

    },

    money: {
        type: Number, 
        default: 0 

    }, 

    description: {
        type: String, 
        maxlength: 100
    },

});

module.exports = mongoose.model('Company', companySchema);

