const hbs = require('hbs');
const path = require('path');

//  FORMA 2: 4. requiero aqui el helper a la par que le paso el hbs 
//  FORMA 2: 6. ahora puedo ir a fformPartial para usar el helper {{{ json errors }}}
require('../helpers/misc.helpers')(hbs);
hbs.registerPartials(path.join(__dirname, '../views/partials'));
