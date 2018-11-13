const db = require('./models');

db.sync({force: true})
  .then(() => {
    console.log('Database synced!');
  })
  .catch(error => {
    console.log('Disaster! Something went wrong!');
    console.log(error);
  })
  .finally(() => {
    console.log('Closing database.')
    db.close();
  })
