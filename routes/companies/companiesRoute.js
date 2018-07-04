const express = require ('express');

const router = express.Router(); 

const companiesController = require('../../controllers/companyController');

router.get("/", companiesController.list);
router.get('/:id/details', companiesController.details);

router.get("/create", companiesController.create);
router.post('/create', companiesController.doCreate);

router.get('/:id/update', companiesController.update);
router.post('/:id/update', companiesController.doUpdate);

router.post('/:id/delete', companiesController.delete);

module.exports = router;

