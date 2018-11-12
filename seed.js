const { db, Gardener, Plot, Vegetable } = require('./models');

db.sync({force: true})
  .then(() => {
    console.log("Success!");
    db.close();
  })
  .catch(err => {
    console.log('Error...:', err);
    db.close();
  });

Vegetable.create({
  name: "carrot",
  color: "orange",
  plantedOn: new Date()
});

const PlotVegetable = db.model('plot_vegetable');

return PlotVegetable.create({
  vegetableId: carrot.id,
  plotId: plot1.id
});

// db.sync({force: true})
// .then(() => {
//   console.log('Database synced!')
//   // db.close() // only if using a version of node without `finally`
// })
// .catch(err => {
//   console.log('Disaster! Something went wrong! ')
//   console.log(err)
//   // db.close() // only if using a version of node without `finally`
// })
// .finally(() => { // only if using a version of node WITH `finally`
//   db.close()
// })
