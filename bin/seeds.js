const Company = require ("../models/company.model.js")
const companies = require ('../data/companies.data.js');
const mongoose = require ("mongoose")

require ('../configs/db.config.js');

Company.insertMany(companies)
.then(data => {
    console.info( `SEEDED!! ${data.length} files inserted`);
    mongoose.connection.close();
})
.catch(error => {
    console.error(error);
    mongoose.connection.close();
});



