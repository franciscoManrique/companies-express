const createError = require("http-errors");
const mongoose = require("mongoose");

const Company = require("../models/company.model");

module.exports.list = (req, res, next) => {
  Company.find()
    .then(companies => {
      if (companies) {
        res.render("companies/home", { companies: companies });
      } else {
        next(createError(404, `not found`));
      }
    })
    .catch(error =>
      next(createError(404, "Error 404. Sorry, companies not found"))
    );
};

module.exports.details = (req, res, next) => {
  console.log("DETAILS");

  const id = req.params.id;
  Company.findById(id)
    .then(company => {
      if (company) {
        res.render("companies/detail", { company: company });
      } else {
        next(createError(404, `not found`));
      }
    })
    .catch(error =>
      next(createError(404, "Error 404. Sorry, company not found"))
    );
};

module.exports.create = (req, res, render) => {
  res.render("create", { form: new Company()});
  console.log("CREATE");
};

module.exports.doCreate = (req, res, next) => {
  console.log("DO CREATE");

  const company = new Company(req.body);  
  company.save()
    .then(company => {
      res.redirect("/companies"); //redirect para cuando quiero
    })
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.render("create", { form: company, errors: error.errors});
      } else {
        next(error);
      }
    });
};

module.exports.update = (req, res, next) => {
  console.log("UPDATE");

  const id = req.params.id;
  Company.findById(id)
    .then(company => {
      if (company) {
        res.render("update", { form: company });
      } else {
        next(createError(404, `couldnt find it`));
      }
    })
    .catch(error => {
      next(error);
    });
};

////PIERDO ID AL SUBMIT sin el object.assign()!!!
////SI HAGO OBJECT.ASSINGN SI PUEDO CON SAVE VALIDARLO SI NO PUES RUNVALIDARTOS ME VALIDA CON MI MODELO DE
////new: true me da el nuevo
////en layout this.isNew me da el si el documentos es nuevo o antiguo
// module.exports.doUpdate = (req, res, next) => {  
//   console.log("DO UPDATE");
//   const id = req.params.id;
//   console.log(id);
  
//   Company.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
//     .then(company => {
//       console.log('BIEN');
      
//       if (company) {
//         res.redirect("/companies");
//       } else {
//         console.log('CREATE ERROR');
        
//         next(createError(404, `not found the company`));
//       }
//     })
//     .catch(error => {
    
//       if (error instanceof mongoose.Error.ValidationError) {
//         console.log('MAL');
//         console.log(req.body);
//          //pierdo el id con el rew.body, no puedo hacer {form: req.body} podria hacer esto =>
//         res.render("update", { form: {_id: id, name: req.body.name, code: req.body.code, image: req.body.image, money: req.body.money}, errors: error.errors });     
//       } else {        
//         console.log('ULTIMO');
        
//         next(error);
//       }
//     });
// };

module.exports.doUpdate = (req, res, next) => {
  const id = req.params.id;

  Company.findById(id)
    .then(company => {
      if (company) {
        Object.assign(company, req.body);

        company.save()
          .then(() => {
            res.redirect(`/companies/${id}`);
          })
          .catch(error => {
            if (error instanceof mongoose.Error.ValidationError) {
              res.render('update', { 
                form: company,
                errors: error.errors //FORMA 1: 1. envio errores a update, voy a layout =>
                //FORMA 2: 1. envio errores a update, voy a update/formPartial
              });
            } else {
              next(error);
            }
          });
      } else {
        next(createError(404, `Company with id ${id} not found`));
      }
    })
    .catch(error => next(error));
};

module.exports.delete = (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  Company.findByIdAndRemove(id)
    .then(company => {
      if (company) {
        res.redirect("/companies");
      } else {
        next(createError(404, `not found`));
      }
    })
    .catch(error => {
      next(error);
    });
};
