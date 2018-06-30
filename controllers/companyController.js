const createError = require("http-errors");
const mongoose = require("mongoose");

const Company = require("../models/company.model");

module.exports.list = (req, res, next) => {
  Company.find()
    .then(companies =>{
            res.render('home', {
                companies
            });
    })
    .catch(error=>next(createError(404, 'Error 404. Sorry, companies not found')));
};
