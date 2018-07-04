const mongoose = require('mongoose');
const DB_NAME = 'companies-clase';
const DB_URI = `mongodb://localhost:27017/${DB_NAME}`;

mongoose.connect(DB_URI)
.then(() => {
    console.info('Connected to database');
})
.catch(error => {
    next(error);
});

