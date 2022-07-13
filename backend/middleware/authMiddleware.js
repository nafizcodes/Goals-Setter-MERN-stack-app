// middlesware - a function that runs during the request, response cycle when a request is made and check the token when 

const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async(req, res, next) =>{
    let token

    //checking for the authorization header
    if(
       req.headers.authorization && 
       req.headers.authorization.startsWith('Bearer')
       ){
        try{
            //get token from header
            token = req.headers.authorization.split(' ')[1] // Bearer token

            //verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //GET USER FROM THE TOKEN (decoded)
            req.user = await User.findById(decoded.id).select('-password') //we dont want the password
            
            next() //calling next piece of middleware
            
        }catch(error){
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        }
    
    }

    if (!token){
        res.status(401)
        throw new Error ('Not authorized, no token')
    }
})

module.exports = { protect }