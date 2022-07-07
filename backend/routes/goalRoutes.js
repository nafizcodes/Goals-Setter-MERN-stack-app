const express = require('express') //common js module syntax
const router = express.Router()
const {getGoals, setGoal, updateGoal,deleteGoal} = require('../controllers/goalController')


// router.get('/', getGoals)
// router.post('/', setGoal)

router.route('/').get(getGoals).post(setGoal)

//id is the param
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)

router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router

