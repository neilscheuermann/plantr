const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/plantr');

const Gardener = db.define('gardener', {
  name: Sequelize.STRING,
  age: Sequelize.NUMBER
});

const Plot = db.define('plot', {
  size: Sequelize.NUMBER,
  shaded: Sequelize.BOOLEAN
});

const Vegetable = db.define('vegetable', {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  plantedOn: Sequelize.DATE
});

Plot.belongsTo(Gardener);
Gardener.hasOne(Plot);
Vegetable.belongsToMany(Plot);
Plot.hasMany(Vegetable);

module.exports = db;
