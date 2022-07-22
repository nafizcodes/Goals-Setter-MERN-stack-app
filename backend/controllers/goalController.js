const asyncHandler = require('express-async-handler')

//this will have bunch mongoose models
const Goal = require('../models/goalModel')
const User = require('../models/userModel')

//@desc   Get goals
//@route  GET /api/goals
//@access Private
//When we use mongoose in each of these functions to interact with database we get back a promise so we use async for promises 
//if not try catch used like in this case, we will use a package express async handler
const getGoals = asyncHandler(async (req, res) => {

    const goals = await Goal.find({ user: req.user.id })

    res.status(200).json({goals})
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

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id,
    })
    res.status(200).json({goal})
})


//@desc   Update goal
//@route  PUT /api/goals/:id 
//@access Private
const updateGoal = asyncHandler(async (req, res) => {
    //getting the specific goal by id
    const goal = await Goal.findById(req.params.id)

    //if not goal then error thrown
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }


    //Check for user
    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    //make sure the logged in user matches the goal user
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }
    //update the goal 
    //1st arguement is id, 2nd is the data which is the text, 3rd is the option
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, 
        req.body, {
            new : true,  //options object
        })

    res.status(200).json({message: `Update goal ${req.params.id}`})
})


//@desc   Delete goals
//@route  DELETE /api/goals/:id
//@access Private
const deleteGoal = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id)

    //Check for user
    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    //make sure the logged in user matches the goal user
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }
    
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    await goal.remove()

    res.status(200).json({id : req.params.id})

})


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}