const asyncHandler = require('express-async-handler')

//@desc   Get goals
//@route  GET /api/goals
//@access Private
//When we use mongoose in each of these functions to interact with database we get back a promise so we use async for promises 
//if not try catch used like in this case, we will use a package express async handler
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get goals'})
})

//@desc   Set goal
//@route  POST /api/goals
//@access Private
const setGoal = asyncHandler(async (req, res) => {

    if(!req.body.text){
        //res.status(400).json( {message: 'Please add a test' })
        res.status(400)
        throw new Error('Please add a text field')  
    }

    res.status(200).json({message: 'Set goal'})
})


//@desc   Update goal
//@route  PUT /api/goals/:id 
//@access Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})


//@desc   Get goals
//@route  DELETE /api/goals/:id
//@access Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})

})


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}