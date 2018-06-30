const express = require ('express');

const router = express.Router(); 

const companiesController = require('../../controllers/companyController');

router.get("/", companiesController.list);
router.get("/create", companiesController.create);
router.post("/create", companiesController.doCreate);

module.exports = router;
