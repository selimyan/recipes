const db = require('./db')
const Sequelize = require('sequelize')

const Meal = db.define('meal', {
  type: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

const Recipe = db.define('recipe', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ingredients: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

Meal.belongsToMany(Recipe, { through: 'mealtype' })
Recipe.belongsToMany(Meal, { through: 'mealtype' })

module.exports = {
  db,
  Meal,
  Recipe
}
