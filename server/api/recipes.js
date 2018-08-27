const router = require('express').Router()
const { db, Meal, Recipe } = require('../db')

router.get('/', (req, res, next) => {
  Recipe.findAll({ include: Meal })
    .then(recipes => { res.json(recipes) })
    .catch(error => next(error))
})

router.get('/:recipeId', (req, res, next) => {
  const recipeId = req.params.recipeId
  Recipe.findById(recipeId)
    .then(recipe => { res.json(recipe) })
    .catch(error => next(error))
})

router.post('/', (req, res, next) => {

})

router.put('/:recipeId', (req, res, next) => {

})

router.delete('/:recipeId', (req, res, next) => {

})

module.exports = router
