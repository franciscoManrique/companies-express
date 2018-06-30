const PORT = 4000;
const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const companiesRouter = require('../routes/companies/companiesRoute');


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/companies', companiesRouter)
app.use('/', (req, res, next) => res.redirect('/companies'))



app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`);  
});
