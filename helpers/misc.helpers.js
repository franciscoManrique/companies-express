//  FORMA 2: 5. recibo el hbs y reigstro helpers de json y de fecha y lo retorno a hbs config==> voy a config

module.exports = (hbs) => {
  hbs.registerHelper('json', function(context) {
    return JSON.stringify(context);
  });

  hbs.registerHelper('datetime', function(date) {
    return date ? date.toLocaleDateString() : undefined;
  });
};

