const db = require('./models');

db.sync({force: true})
  .then(() => {
    console.log("Success!");
  })
  .catch(err => {
    console.log('Error...:', err);
    db.close();
  });
