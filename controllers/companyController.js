const createError = require("http-errors");
const mongoose = require("mongoose");

const Company = "../models/company.model";

module.exports.list = (req, res, next) => {
  Company.find()
    .then(companies=>{
        res.render('home', );
    })
    .catch();
};
