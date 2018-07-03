const mongoose = require('mongoose');
const DB_NAME = 'companies-clase';
const DB_URI = `mongodb://localhost/${DB_NAME}`;

mongoose.connect(DB_URI)
    .then(() => {
        console.info('Connected to database');
    })
    .catch(error => {
        next(error);
    })

